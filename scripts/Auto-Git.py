import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Directory to monitor
WATCHED_DIR = "../assets/day1"

class GitAutoCommitHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        # Check for file created or deleted events
        if event.event_type in ("created", "deleted"):
            print(f"Detected {event.event_type} on {event.src_path}")
            self.run_git_commands()

    @staticmethod
    def run_git_commands():
        try:
            # Run git add .
            subprocess.run(["git", "add", "."], check=True)
            print("Git add executed.")
            # Run git commit
            subprocess.run(["git", "commit", "-m", "\"committed\""], check=True)
            print("Git commit executed.")
            subprocess.run(["git", "push", "-u","origin","main"], check=True)
            print("Git add executed.")

        except subprocess.CalledProcessError as e:
            print(f"Error during Git operation: {e}")

if __name__ == "__main__":
    # Create an event handler and observer
    event_handler = GitAutoCommitHandler()
    observer = Observer()
    observer.schedule(event_handler, WATCHED_DIR, recursive=True)

    print(f"Monitoring directory: {WATCHED_DIR}")
    try:
        observer.start()
        while True:
            pass  # Keep the script running
    except KeyboardInterrupt:
        observer.stop()
        print("Stopped monitoring.")
    observer.join()
