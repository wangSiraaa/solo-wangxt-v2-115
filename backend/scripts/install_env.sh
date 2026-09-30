#!/usr/bin/env bash
# 在无 root、/workspace 为 virtiofs 的受限环境中准备后端依赖（本仓库实际使用的方式）。
# 需要网络。产出：/tmp/condaroot/env（Python 3.11 + PostgreSQL + PostGIS + pip 依赖）。
set -euo pipefail

MM=/workspace/.mmbin/micromamba
if [ ! -x "$MM" ]; then
  mkdir -p /workspace/.mmbin /tmp/mmdl
  curl -sL -o /tmp/mmdl/m.tar.bz2 \
    "https://micro.mamba.pm/api/micromamba/linux-$(uname -m)/latest"
  tar -xjf /tmp/mmdl/m.tar.bz2 -C /workspace/.mmbin --strip-components=1 bin/micromamba
fi

export MAMBA_ROOT_PREFIX=/tmp/condaroot CONDA_PKGS_DIRS=/tmp/condapkgs
"$MM" create -y -p /tmp/condaroot/env -c conda-forge python=3.11 postgresql postgis
/tmp/condaroot/env/bin/pip install -r "$(dirname "$0")/../requirements.txt"
echo "环境就绪：/tmp/condaroot/env"
