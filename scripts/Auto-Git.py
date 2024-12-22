import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Root directory to monitor
WATCHED_ROOT_DIR = "../assets"

class GitAutoCommitHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        # Check if a file or folder is created, deleted, or modified
        if event.event_type in ("created", "deleted", "modified"):
            print(f"Detected {event.event_type} on {event.src_path}")
            self.run_git_commands()

    @staticmethod
    def run_git_commands():
        try:
            # Stage all changes, including untracked files
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

def monitor_root_directory(root_dir):
    observer = Observer()
    event_handler = GitAutoCommitHandler()
    
    # Schedule the event handler for the root directory and its subdirectories
    observer.schedule(event_handler, root_dir, recursive=True)
    print(f"Monitoring changes under root directory: {root_dir}")

    return observer

if __name__ == "__main__":
    try:
        # Initialize the observer for the root directory
        observer = monitor_root_directory(WATCHED_ROOT_DIR)
        observer.start()
        
        print(f"Monitoring all changes in: {WATCHED_ROOT_DIR} and its subdirectories.")
        
        while True:
            pass  # Keep the script running continuously
        
    except KeyboardInterrupt:
        observer.stop()
        print("Stopped monitoring.")
    observer.join()
