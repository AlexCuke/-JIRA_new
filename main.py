"""Точка входа в приложение миграции задач."""

from migration_gui import MigrationGUI


def main() -> None:
    app = MigrationGUI()
    app.mainloop()


if __name__ == "__main__":
    main()
