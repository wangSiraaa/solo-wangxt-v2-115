"""数据库引擎与会话。

默认连接本机 unix socket 上的教学 PostgreSQL（见 scripts/setup_db.sh）。
通过 DATABASE_URL 环境变量覆盖。
"""
from __future__ import annotations

import os

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

DEFAULT_URL = "postgresql+psycopg2://sunuser@/sunteach?host=/tmp&port=55436"
DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_URL)

engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
