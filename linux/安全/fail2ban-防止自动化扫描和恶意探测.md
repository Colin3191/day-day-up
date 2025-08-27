# Fail2Ban：自动封禁频繁扫描的 IP
```bash 
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```
---
### 🔍 **如何验证 Fail2Ban 是否实际生效**
#### 1. **检查 Fail2Ban 运行状态**
```bash
sudo systemctl is-active fail2ban  # 应返回 "active"
sudo fail2ban-client status       # 查看所有监狱状态
sudo fail2ban-client status sshd  # 查看 sshd 监狱详情
```
如果生效，会显示当前被禁止的 IP 列表（如 `Banned IP list: 1.2.3.4`）。

#### 2. **检查防火墙规则**
```bash
sudo iptables -L -n | grep f2b-sshd
```
或（如果使用 `nftables`）：
```bash
sudo nft list ruleset | grep fail2ban
```
如果看到 `f2b-sshd` 链和拒绝规则，说明封禁生效。

---

### ⚠️ **常见问题排查**
1. **无封禁记录？**
   - 确认 `/var/log/auth.log` 中有 SSH 失败记录：
     ```bash
     sudo grep "Failed password" /var/log/auth.log
     ```
   - 如果日志路径不同，需修改 jail 配置（如 Ubuntu 22.04+ 可能用 `journalctl`）。

2. **封禁不持久？**
   - 检查 `banTime` 是否过短（默认 10 分钟），可在 `/etc/fail2ban/jail.local` 中调整：
     ```ini
     [sshd]
     bantime = 1d  # 封禁 1 天
     ```

3. **Fail2Ban 崩溃？**
   - 检查完整日志：
     ```bash
     sudo journalctl -u fail2ban --no-pager -n 100
     ```