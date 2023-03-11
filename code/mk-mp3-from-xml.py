import os
from xml.etree import ElementTree
import xml.etree.ElementPath as ElementPath
from gtts import gTTS

# Set the directory containing the XML files
dir_path = '/Users/thc4/Github/m-k-manuscript-data/entries/xml/tl/'

# Set the output directory for the mp3 files
outdir_path = '../audio/'

# Set the XPath expression for the desired element
xpath_expression = './/div[@categories = "medicine"]'

# Iterate over each XML file in the directory
for filename in os.listdir(dir_path):
    # Check if the file is an XML file
    if filename.endswith('.xml'):
        # Parse the XML file and extract the desired elements
        tree = ElementTree.parse(os.path.join(dir_path, filename))
        root = tree.getroot()
        elements = ElementPath.findall(root, xpath_expression)

        # Print the number of matching elements found
        print(f"Found {len(elements)} matching elements")

        # If no matching elements are found, skip to the next file
        if not elements:
            print(f"No matching elements in file {filename}")
            continue

        # Iterate over the matching elements and generate an MP3 file from the extracted text
        for index, element in enumerate(elements):
            # Extract the text content of the element and its descendants
            text = ' '.join(element.itertext()).strip()

            # Print the tag and text content of the element
            print(f"  Element {element.tag}: {text}")

            # If no text content is found, skip to the next element
            if not text:
                print(f"No text to convert in file {filename} element {element.tag}")
                continue

            try:
                # Generate an MP3 file from the extracted text using Google's TTS engine
                tts = gTTS(text)
            except ValueError as e:
                # If an error occurs during MP3 generation, skip to the next element
                print(f"Error generating MP3 for file {filename} element {element.tag}: {e}")
                continue

            # Save the MP3 file in the same directory as the original XML file
            mp3_filename = f"{filename[:-4]}_{index}.mp3"
            mp3_path = os.path.join(outdir_path, mp3_filename)
            try:
                tts.save(mp3_path)
            except ValueError as e:
                # If an error occurs during MP3 saving, skip to the next element
                print(f"Error saving MP3 file {mp3_filename}: {e}")
                continue
# Summary
# ------
# 1. The script uses the os.listdir method to iterate over each file in the directory specified by dir_path.
# 2. For each file, the script checks if the file has an .xml file extension using the str.endswith method. If the file is not an XML file, the script skips to the next file.
# 3. For each XML file, the script uses the ElementTree.parse method to parse the file and create an ElementTree object representing the XML document.
# 4. The script then gets the root element of the XML document using the ElementTree.Element.getroot method.
# 5. The script uses the xml.etree.ElementPath.findall method to find all elements in the XML document that match the XPath expression specified by xpath_expression.
# 6. The findall method returns a list of matching elements, which the script stores in the elements variable.
# 7. For each matching element, the script uses the itertext method to extract the text content of the element and all its descendant elements.
# 8. The itertext method returns an iterator over the text content of the element and its descendants.
# 9. The script uses the str.join method to concatenate all the text content into a single string, with a space ' ' as the separator between each text content. This creates a single string containing all the text content of the selected element and its descendants.
# 10. The script uses the str.strip method to remove any leading or trailing whitespace from the string. This gives us a clean version of the text content, with no extraneous whitespace characters.
# 11. The resulting text variable contains the cleaned text content of the element, which the script then passes to the gTTS constructor to generate an MP3 file.
