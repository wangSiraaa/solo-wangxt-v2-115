"""应用配置：数据库连接与静态资源目录均来自环境变量，便于教学环境切换。"""
import os

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg2://sunuser:sunpass@localhost:55436/sunteach",
    )
    frontend_dist: str = os.getenv("FRONTEND_DIST", "/workspace/frontend/dist")
    snapshot_dir: str = os.getenv("SNAPSHOT_DIR", "/workspace/data/snapshots")
    cors_origins: str = os.getenv("CORS_ORIGINS", "*")


settings = Settings()
