**Project: Task Management System**

**Course Code**: COMP3810SEF  
**Group No.**: Group 5  
**Students' names, and SID**:
- Tsui Ching Kit (SID: 14104856)
- Chan Pak Hei (SID: 13494870)
- Qiu Yiu Fung (SID: 13488063)

---

## 1. Project info
Project name: **Task Management System**  
Group info: Group 5, 3 members (see above)

---

## 2. Project file intro

- **server.js**: Main Express server. Sets up EJS, session, static files, MongoDB, and mounts `auth.js`, `tasks.js`, `api.js`.
- **package.json**: Lists dependencies: `express`, `mongoose`, `ejs`, `bcrypt`, `express-session`, `connect-mongo`. Includes `start` and `dev` scripts.
- **public (folder)**: Contains `styles.css` (custom styling), `scripts.js` (optional AJAX).
- **views (folder)**: EJS files: `login.ejs`, `register.ejs`, `tasks.ejs`, `create-task.ejs`, `edit-task.ejs`, `header.ejs`.
- **models (folder)**: Mongoose models: `user.js` (with bcrypt), `task.js`, `db.js` (connection).

---

## 3. The cloud-based server URL

**Live URL**: `https://comps381f-group1.azurewebsites.net`

> Deployed on **Microsoft Azure App Service** with **Azure Cosmos DB (MongoDB API)**.

---

## 4. Operation guides

### Use of Login/Logout pages
- **Valid login information**:
  | Username | Password | Email |
  |--------|----------|-------|
  | `alice` | `alice123` | `alice@example.com` |
  | `bob`   | `bob123`   | `bob@example.com` |

- **Sign-in steps**:
  1. Go to: `https://comps381f-group1.azurewebsites.net/login`
  2. Enter username and password → Click **Login**
  3. Redirect to `/tasks`
  4. Click **Logout** (top-right) → Back to login

> Register at `/register`

---

### Use of your CRUD web pages
| Action | Button/UI |
|-------|----------|
| **Create** | Click **"Create New Task"** → Fill form → Submit |
| **Read** | View list at `/tasks`. Use search filters |
| **Update** | Click **Edit** → Modify → Click **Update** |
| **Delete** | Click **Delete** button |

---

### Use of your RESTful CRUD services
| HTTP | Path | Purpose | cURL Command |
|------|------|--------|--------------|
| `GET` | `/api/tasks` | List all | `curl https://comps381f-group1.azurewebsites.net/api/tasks` |
| `POST` | `/api/tasks` | Create | `curl -X POST -H "Content-Type: application/json" -d '{"title":"API Task","priority":"High"}' https://comps381f-group1.azurewebsites.net/api/tasks` |
| `PUT` | `/api/tasks/:id` | Update | `curl -X PUT -H "Content-Type: application/json" -d '{"status":"Done"}' https://comps381f-group1.azurewebsites.net/api/tasks/507f1f77bcf86cd799439011` |
| `DELETE` | `/api/tasks/:id` | Delete | `curl -X DELETE https://comps381f-group1.azurewebsites.net/api/tasks/507f1f77bcf86cd799439011` |

> Replace `:id` with actual task ID.

---

**Thank you for reviewing our project!**