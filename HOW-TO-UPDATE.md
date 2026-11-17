# How to update this website

Edit files directly on GitHub: open the file, click the ✏️ pencil icon, make
your change, then click **Commit changes**. The site updates in 1–2 minutes.

| I want to…                                | Edit this file              |
|-------------------------------------------|-----------------------------|
| Add email, supervisor, MBOT number, CV    | `_config.yml`               |
| Start recruiting participants             | `_config.yml` → `research:` (set `recruiting: true`) |
| Add a publication                         | `_data/publications.yml`    |
| Add a project or role                     | `_data/projects.yml`        |
| Change the menu                           | `_data/navigation.yml`      |
| Change the About text or Journey timeline | `about.html`                |
| Change the research description           | `research.html`             |
| Change the home page intro                | `index.html`                |
| Change colours or fonts                   | `assets/css/style.css`      |

## Uploading a PDF (CV, consent form, etc.)
1. Open the `files` folder on GitHub → **Add file** → **Upload files**.
2. Give it a simple name, e.g. `cv.pdf`.
3. In `_config.yml`, set e.g. `cv: "/files/cv.pdf"`.

## Rules that prevent errors in .yml files
- Keep the same indentation (spaces, never tabs).
- Put text in "double quotes".
- Empty `""` means "hide this on the site".

## If something breaks
Go to the repository's **Actions** tab. A red ✖ shows the build failed;
click it to see which file and line caused it. You can also undo by opening
the file's **History** and restoring the previous version.
