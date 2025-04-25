# Leave Request Dashboard

A simple leave request dashboard built with **Next.js** and **SAP UI5 Web Components for React**. It includes functionality to filter leave requests by status, sort them by date, and update their approval state.

## 🚀 What Was Implemented

- Display of leave requests with basic required information
- **Status filtering** via dropdown
- **Sort toggle** for ascending/descending date order
- **Approve/Reject** functionality for requests
- **Unit tests** for filtering, sorting, and interaction logic

## 📦 How to Run the Project

```bash
npm install
```

```bash
npm run dev
```

Then open your browser at http://localhost:3000.
Press Go to Leave Requests

🧪 How to Run the Tests

```bash
npm run test
```

Tests are written with Vitest and use @testing-library/react for UI interaction.

🧱 UI5 Components Used
This project uses the following components from @ui5/webcomponents-react:

For triggering actions (sort, approve, reject)

```
<Button />
```

For status filtering

```
<Select />
```

```
<Option />
```

For organizing leave request info

```
<Card />
```

```
<CardHeader />
```
