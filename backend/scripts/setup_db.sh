#!/usr/bin/env bash
# 一键启动教学环境（在本仓库交付的容器/沙箱内）。
# 约定：micromamba 环境在 /tmp/condaroot/env，PG 数据目录 /tmp/pgdata，端口 55436。
set -euo pipefail

ENVBIN=/tmp/condaroot/env/bin
PGDATA=/tmp/pgdata
export DATABASE_URL="postgresql+psycopg2://sunuser@/sunteach?host=/tmp&port=55436"

if [ ! -x "$ENVBIN/postgres" ]; then
  echo "未找到 $ENVBIN/postgres，请先按 README 安装 PostgreSQL/PostGIS 环境" >&2
  exit 1
fi

if [ ! -d "$PGDATA" ]; then
  "$ENVBIN/initdb" -D "$PGDATA" -U sunuser --auth=trust --encoding=UTF8
fi
"$ENVBIN/pg_ctl" -D "$PGDATA" -l /tmp/pg.log -o "-p 55436 -k /tmp -c listen_addresses=''" start
sleep 2
"$ENVBIN/psql" -h /tmp -p 55436 -U sunuser -d postgres -tc \
  "SELECT 1 FROM pg_database WHERE datname='sunteach'" | grep -q 1 || \
  "$ENVBIN/psql" -h /tmp -p 55436 -U sunuser -d postgres -c "CREATE DATABASE sunteach;"

cd "$(dirname "$0")/.."
"$ENVBIN/python" -m app.seed
echo "数据库就绪。启动 API： DATABASE_URL='$DATABASE_URL' $ENVBIN/uvicorn app.main:app --port 8000"
