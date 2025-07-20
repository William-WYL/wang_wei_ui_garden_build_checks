## UI Garden - React Component Library Deployment Guide

This guide explains how to run the UI Garden React Component Library from Docker Hub using Docker.

#### 🛠 Prerequisites

1. **Docker installed on your machine**
2. **Internet access to pull the Docker image**

#### 🚀 Run the App from Docker Hub

1. **Pull the image from Docker Hub**

```bash
docker pull williamwyl/wang_wei_coding_assignment13:latest
```

2. **Run the container**

This command runs the container and maps it to localhost:8083:

```bash
docker run -d -p 8018:80 --name wang_wei_coding_assignment13 williamwyl/wang_wei_coding_assignment13:latest
```

3. **Open the App in Browser**

Go to:

http://127.0.0.1:8018

You should see the production build of the UI Garden React component library.

#### 🛑 Stopping the Container (Optional)

To stop the running container:

```bash
docker stop wang_wei_coding_assignment13
```

To remove it:

```bash
docker rm wang_wei_coding_assignment13
```

#### 📦 About This App

This is a component library built with:

    Built with React + TypeScript

    Storybook integration for component previews

    Styled-components for styling

    Husky pre-commit hooks to ensure code quality with Prettier, ESLint, and tests before commits

    GitHub Actions configured for CI/CD to run the same quality checks on every push
