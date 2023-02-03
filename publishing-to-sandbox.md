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

## From Google Drive to the Sandbox
To transfer a Googledoc to the Sandbox for publication, first the text in the Googledoc is formatted to aid the transformation, then the Googledoc is downloaded as a `.docx`. Using pandoc, the `.docx` is converted to `.md`, extracting any embedded images. Finally, the `.md` file and associated media files are uploaded to the Github repo and added to the indices. 

This is a process most common for student projects.

### 1. Formatting in Google Drive
- The main text of the paper should be formatted as "normal text."
- The title of the paper should be formatted as H1. All subsequent headers should be formatted and nestled underneath H1 as H2, H3, etc.
- The author names and any other contextual info (e.g., class name) should be formatted as "normal text," either below or after the title.
- Any URLs or links should be hyperlinked.
- Images
     - Inserted "in-line" for proper text breaking
     - All images should be captioned (formatted as "normal text")
     - Alternate option: insert images in a 1x2 table: row 1 has image and row 2 has caption
- Tables
     - Better if a title can be provided for the table
     - Each row and/or column should be appropriately titled to describe the information. The contents of the cells under these headers should match the header type

### 2. Save as `.docx`
Download the Googledoc as a `.docx`. Make sure the file name follows our naming protocols (all lowercase, no spaces or special characters, etc.). If the paper is a student project, it should follow this naming protocol:
```
[semester+year]_[last name]_[first name]_final-project_[short descriptive title].md
example:
sp22_nebolsin_victoria_final-project_animal-rationality.md
```

### 3. Use pandoc to convert to `.md` and extract media
Make sure you have [pandoc](https://pandoc.org/) installed on your machine. For more information about other transformation and extraction options, see [https://pandoc.org/MANUAL.html#options](https://pandoc.org/MANUAL.html#options). If you do not have pandoc, you could find a free online converter, but know that how the converter transforms to `.md` is hidden from you and you will often have to download the `.md` file.

In the command line, navigate to the directory where the file is downloaded. Use the following command to convert from `.docx` to `.md` AND extract images and put them in a `media/` directory:
```
pandoc --extract-media=. -o [file-name].md -f docx -t gfm [file-name].docx
example:
pandoc --extract-media=. -o sp22_nebolsin_victoria_final-project_animal-rationality.md.md -f docx -t gfm sp22_nebolsin_victoria_final-project_animal-rationality.md.docx
```

After executing this command, you should now have a `.md` file and a `media/` directory in the same directory as the original `.docx` file.

#### Cleaning up the `media/` directory
Rename the `media/` directory to add the person's last name, e.g., `media-nebolsin/`, to differentiate these media files from other projects in the Sandbox. 

Open the `.md` file in a text editor such as Sublime and replace all `media/` to `media-nebolsin/` (or to whatever you renamed the directory).

#### Common issues after pandoc conversion
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
- Extra OR missing whitespaces or linebreaks. Sometimes it may be necessary to add an encoded linebreak (i.e., `<br>`).
- Make sure any relative links (i.e., ones pointing to other resources in the Github repo) have the correct filed path as per the directory structure of the repo.
- Double-check that tables have been transformed properly. If needed, this [online markdown table generator](https://www.tablesgenerator.com/markdown_tables) is really helpful. 

### 4. Add the files to Github
You can do this from the command line or by using the Github interface in your browser. 

Navigate to the desired directory and upload the `.md` file (and `media/` directory if you have one). 

### 5. Add the page to the index
You can do this from the command line or by using the Github interface in your browser. 

Edit the index file where this page should appear (e.g., `index-course-projects.md` for student projects) by adding it as a link.
For example:
```
- [Animal Rationality in Ms. Fr. 640](sp22_nebolsin_victoria_final-project_animal-rationality.md) by Victoria Nebolsin
```