> Last updated 2023-02-03 by NJR

IN PROGRESS

# Publishing to the Sandbox Site
The publicly-available [M&K Sandbox Site](https://cu-mkp.github.io/sandbox/) is powered through Github Pages. Input for site content is in Github-flavored Markdown. Whenever possible and appropriate, resources and pages for the Sandbox site should be in Markdown.

## File formats and location in Github repo

| Original file format               | Target File Format (in Github)                            | Location in Github repo       |
|------------------------------------|-----------------------------------------------------------|-------------------------------|
| Googledoc, Word (`.docx`)          | `.md` (Markdown)                                          | usually `/docs/`              |
| Googlesheets, Excel (`.xlsx`)      | `.csv` (if formatting is meaningful, ALSO upload `.xlsx`) | usually `/data/`              |
| Googleslides, Powerpoint (`.pptx`) | `.pdf` (if original is wanted, ALSO upload `.pptx`)       | usually `/docs/`              |
| `.pdf`                             | `.pdf`                                                    | usually `/docs/`              |
| Images                             | `.jpg` or `.png`                                          | usually `/docs/` or `images/` |

## Formatting in Google Drive

Tutorial and Policies for Converting Projects Created in the Google Drive to files for the Sandbox Site in Github

## Common issues after pandoc conversion
- Footnotes formatting incomplete. Pandoc will preserve the footnotes, but only formats them partially. To make them fully clickable, some additional formatting is required.
     - For example, pandoc will output:
    ```
    This is my text.[1]
    ...
    [1] This is my footnote
    ```
    This needs to be changed to:
    ```
    This is my text.[^1]
    ...
    [^1]: This is my footnote
    ```
- Footnotes linebreaks. If the footnotes have whitespace linebreaks, Github Pages will cut off the footnote at that linebreak and put the remaining text either before or after the footnotes section. To prevent this, remove all linebreaks.     
- 
## Helpful tools
- [online markdown table generator](https://www.tablesgenerator.com/markdown_tables)
