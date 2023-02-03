> Last updated 2023-02-03 by NJR


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




Tutorial and Policies for Converting Projects Created in the Google Drive to files for the Sandbox Site in Github

## Common issues after pandoc conversion
- Footnotes:
    - pandoc will preserve the footnotes, but only formats them partially. To make them fully clickable, some additional formatting is required.
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
## Helpful tools
- [online markdown table generator](https://www.tablesgenerator.com/markdown_tables)
