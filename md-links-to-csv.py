import os
import re
import csv
import sys

# Set the directory to search
root_dir = './docs'

# Create a CSV file for output
output_file = 'links.csv'
with open(output_file, mode='w', newline='') as csvfile:
    csv_writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    csv_writer.writerow(['File', 'Link'])

# Define a regular expression to match hyperlinks in Markdown syntax
regex = re.compile(r'\[.*?\]\((.*?)\)', re.IGNORECASE)

# Recursively traverse the directory structure and process each file
for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        # Only process Markdown files
        if file.endswith('.md'):
            file_path = os.path.join(subdir, file)
            sys.stderr.write("Processing file: {}\n".format(file_path))
            with open(file_path, 'r') as md_file:
                md_content = md_file.read()
                for match in re.finditer(regex, md_content):
                    link = match.group(1)
                    print('LINK:', link)
                    with open(output_file, mode='a', newline='') as csvfile:
                        csv_writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
                        csv_writer.writerow([file_path, link])
