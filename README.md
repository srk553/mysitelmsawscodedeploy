"# Mini LMS

A simple learning management system built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Features

- 6 courses, 20 lessons, each course with a quiz
- Hash-based routing: `#/`, `#/course/<id>`, `#/course/<id>/<lesson>`, `#/course/<id>/quiz`, `#/progress`
- Search and level filtering on the course list
- Lesson completion tracking persisted in `localStorage` (key `mini-lms:progress:v1`)
- Per-course and overall progress bars, plus a progress overview page
- Keyboard accessible, light/dark aware, reduced-motion aware

## Files

| File | Purpose |
| --- | --- |
| `index.html` | App shell: top bar, search, filters, mount point |
| `styles.css` | All styling, CSS custom properties for theming |
| `app.js` | Course data, router, rendering, progress state |
| `appspec.yml` | AWS CodeDeploy deployment spec (Linux) |
| `hooks/after_install` | Restarts nginx after the files are copied |

## Deploy with AWS CodeDeploy

The app is static, so a single `files` block is enough: everything in the
revision bundle is copied to `/var/www/html/`.

1. Create an EC2 instance (Linux) with the CodeDeploy agent installed, and an
   IAM role allowing S3 read on the bucket plus `autoscaling:TerminateInstanceInAutoScalingGroup`.
2. Create an application (`MySiteLMS`) and a deployment group targeting the instance.
3. Create the S3 bucket, then package and push the revision:

```bash
aws deploy push --application-name MySiteLMS --s3-location bucket=my-s3-bucket,prefix=build/,bundleType=tgz
aws deploy create-deployment \
  --application-name MySiteLMS \
  --deployment-group-name mysitelms \
  --revision revisionType=S3,s3Location=bucket=my-s3-bucket,key=build/Appspec.yml,bundleType=tgz
```

`appspec.yml` expects the site files and the `hooks/` directory to be in the
bundle root. `hooks/after_install` runs as root after install and does a single
`systemctl restart nginx`.
" 
