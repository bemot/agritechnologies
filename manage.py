#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'technologiesinit.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

    # Add parent folder to path so that we can import Photologue itself.
    PROJECT_PATH = os.path.abspath(os.path.split(__file__)[0])
    sys.path.append(os.path.join(PROJECT_PATH, ".."))


if __name__ == '__main__':
    main()
