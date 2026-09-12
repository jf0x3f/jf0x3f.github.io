# CyberCentauri

Custom WordPress theme for https://cybercentauri.com.

Open `E:\project\cybercentauri` in VS Code. Edit files under
`wp-content/themes/cybercentauri 2/`, the active theme identified in the backup.
The space in the directory name is intentional; do not rename it independently
of WordPress's theme settings.

The repository tracks this theme and deployment configuration only. The full
backup stays on disk. WordPress core, third-party plugins, uploads, wp-config.php,
and the SQL export are excluded. Never force-add those files to Git.

## Everyday workflow

Edit the theme, review the Source Control diff, commit, then push to `main`.
Once hosting is configured, GitHub Actions checks PHP syntax and uploads the
theme to Namecheap. Saving a file alone does not publish it.

Use these theme files for common changes:

| Website area | File |
| --- | --- |
| Homepage | `wp-content/themes/cybercentauri 2/front-page.php` |
| Blog/archive listing | `wp-content/themes/cybercentauri 2/index.php` |
| Individual posts | `wp-content/themes/cybercentauri 2/single.php` |
| Header/navigation | `wp-content/themes/cybercentauri 2/header.php` |
| Footer | `wp-content/themes/cybercentauri 2/footer.php` |
| Styles | `wp-content/themes/cybercentauri 2/style.css` |

Do not create or edit `E:\project\cybercentauri\index.php`. That is outside the
active theme, is excluded from deployment, and replacing WordPress's live root
`index.php` would break its bootstrap. The workflow rejects any future files
committed outside the allowed theme and deployment configuration.

PHP files need WordPress with PHP and a database to preview locally; VS Code
Live Server is not a WordPress runtime. A local WordPress installation has not
yet been configured. Posts, Customizer values, and page-builder content remain
managed in WordPress's database and are not deployed by this workflow.

## Tailwind CSS

Tailwind CSS is installed inside the active theme. Run these commands from the
repository root:

```powershell
npm --prefix "wp-content/themes/cybercentauri 2" install
npm --prefix "wp-content/themes/cybercentauri 2" run dev
```

Keep the second command running while editing PHP templates or the static
preview. It rebuilds `assets/css/tailwind.css` whenever Tailwind classes change.
For a minified production build, run:

```powershell
npm --prefix "wp-content/themes/cybercentauri 2" run build
```

In a second terminal, run `node .preview/server.js` to serve the static preview
at `http://127.0.0.1:8080`. The preview server reloads the browser when the
compiled Tailwind stylesheet changes.

## One-time Namecheap connection

1. In cPanel, confirm the live active theme is `cybercentauri 2`. Confirm the
   document root for cybercentauri.com under Domains. Take a current hosting
   backup before the first deployment; the local backup may be older.
2. Enable SSH using Manage Shell. Confirm SSH and rsync work on the account.
3. Authorize a dedicated deployment SSH public key in cPanel. Store its private
   key only in GitHub Actions secrets, never in the repository or chat.
4. Obtain the server SSH host key and verify its fingerprint with Namecheap or
   an already trusted connection. For port 21098, known_hosts uses the hostname
   format `[server-hostname]:21098`.
5. Under GitHub Settings > Secrets and variables > Actions, add these repository
   secrets:

   | Secret | Value |
   | --- | --- |
   | SSH_HOST | Namecheap server hostname |
   | SSH_USER | cPanel username |
   | SSH_PRIVATE_KEY | Dedicated deployment private key |
   | SSH_KNOWN_HOSTS | Verified server known_hosts entry |
   | WP_ROOT | Absolute WordPress document root, without a trailing slash |

6. Set repository variable `SSH_PORT` if different from Namecheap shared
   hosting's default 21098. Set `DEPLOY_ENABLED` to `true` only after verifying
   the target and taking the current backup. Run the workflow manually once.
7. Check the Actions log and the live site. Purge LiteSpeed/browser caches if
   changes are not visible. Future pushes to main deploy automatically.

Deployment was connected on September 12, 2026 with `DEPLOY_ENABLED=true`.
The target is `server327.web-hosting.com:21098`, account `cybewgee`, document
root `/home/cybewgee/public_html`. The SSH host fingerprint was verified through
the authenticated cPanel terminal. Disable automatic deployment by setting
`DEPLOY_ENABLED=false` in GitHub Actions repository variables.

Before setup, the live theme was compared with the repository and matched.
Initial theme and database backups are in `/home/cybewgee/deployment-backups/`
with names ending in `before-github-20260912` (plus `.tar.gz` or `.sql`). Each
deployment also saves overwritten files under `github-RUN_ID-ATTEMPT` there.
The workflow only uploads the active theme and does not delete remote files.
Renaming or deleting a tracked file therefore requires deliberate remote cleanup.
Uploads use delayed updates but are not an atomic whole-site release. PHP lint
checks syntax, not compatibility with the server's PHP version or WordPress.

To restore an earlier edit, revert its commit and push. For removed/renamed
files or a failed first deployment, restore the hosting theme backup as needed.

References:
- https://www.namecheap.com/support/knowledgebase/article.aspx/10040/2210/how-to-enable-ssh-shell-in-cpanel/
- https://www.namecheap.com/support/knowledgebase/article.aspx/9428/89/how-to-connect-via-ssh-using-keys/
- https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets
