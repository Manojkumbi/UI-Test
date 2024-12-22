import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Directory to monitor
WATCHED_DIR = "../assets/day3"

class GitAutoCommitHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        # Check for file created or deleted events
        if event.event_type in ("created", "deleted", "modified"):
            print(f"Detected {event.event_type} on {event.src_path}")
            self.run_git_commands()

    @staticmethod
    def run_git_commands():
        try:
            # Stage all changes including untracked files
            subprocess.run(["git", "add", "--all"], check=True)
            print("Git add executed.")
            
            # Commit the changes
            commit_message = "Jarvis: changes detected in monitored directory"
            subprocess.run(["git", "commit", "-m", commit_message], check=True)
            print("Git commit executed.")
            
            # Push changes to the remote repository
            subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
            print("Git push executed.")
        
        except subprocess.CalledProcessError as e:
            print(f"Error during Git operation: {e}")

if __name__ == "__main__":
    event_handler = GitAutoCommitHandler()
    observer = Observer()
    observer.schedule(event_handler, WATCHED_DIR, recursive=True)

    print(f"Monitoring directory: {WATCHED_DIR}")
    try:
        observer.start()
        while True:
            pass  
    except KeyboardInterrupt:
        observer.stop()
        print("Stopped monitoring.")
    observer.join()
