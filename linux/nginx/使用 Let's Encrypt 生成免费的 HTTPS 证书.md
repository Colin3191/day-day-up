
# 使用 Let's Encrypt 生成免费的 HTTPS 证书

使用 Let's Encrypt 生成免费的 HTTPS 证书可以通过 Certbot 工具轻松实现。以下是详细步骤：

---

### **1. 安装 Certbot**
根据你的操作系统选择安装方式：

#### **Ubuntu/Debian**
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx  # 如果使用 Nginx
```

---

### **2. 获取证书**
#### **方式一：自动配置（推荐）**
Certbot 可以自动修改 Nginx/Apache 配置：
```bash
sudo certbot --nginx   # 使用 Nginx
```
按提示输入邮箱、域名，同意服务条款后，Certbot 会自动完成证书申请和配置。

#### **方式二：手动获取证书（不修改配置）**
```bash
sudo certbot certonly --standalone -d example.com -d www.example.com
```
需确保：
- 80/443 端口未被占用（临时停止 Web 服务）。
- 域名已解析到当前服务器。

---

### **3. 验证证书**
检查证书是否生成成功：
```bash
sudo certbot certificates
```
输出应包含证书路径（如 `/etc/letsencrypt/live/example.com/fullchain.pem`）和到期时间。

---

### **4. 配置 Web 服务器**
#### **Nginx 示例**
```nginx
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # 其他配置...
}
```
重启 Nginx：
```bash
sudo systemctl restart nginx
```
---

### **5. 自动续期**
Let's Encrypt 证书有效期为 90 天，设置自动续期：
```bash
sudo certbot renew --dry-run  # 测试续期是否正常
```
添加定时任务（每月检查续期）：
```bash
sudo crontab -e
```
添加一行：
```bash
0 0 1 * * /usr/bin/certbot renew --quiet
```

---

### **常见问题**
1. **端口占用**：确保 80/443 端口开放且未被防火墙拦截。
2. **DNS 解析**：域名必须正确解析到服务器 IP。
3. **多域名**：通过 `-d` 参数添加多个域名，如 `-d example.com -d api.example.com`。
4. **强制 HTTPS**：在 Certbot 中选择 `Redirect` 选项或手动配置 301 重定向。