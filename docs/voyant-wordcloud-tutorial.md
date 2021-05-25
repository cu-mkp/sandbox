# Create a wordcloud using Voyant tools

## step 1: create corpus around word of interest
E.g., `wom*` (to capture woman, women, etc.)
![image](https://user-images.githubusercontent.com/14779727/118019233-c2026c80-b326-11eb-9c78-5e37bb214187.png)

<!--	Exported from Voyant Tools (voyant-tools.org).
The iframe src attribute below uses a relative protocol to better function with both
http and https sites, but if you're embedding this into a local web page (file protocol)
you should add an explicit protocol (https if you're using voyant-tools.org, otherwise
it depends on this server.
Feel free to change the height and width values or other styling below: -->
<iframe style='width: 681px; height: 190px;' src='http://voyant-test.makingandknowing.org:8888/tool/Contexts/?query=wom*&corpus=f0380370babbd77eca24c52ab98c0b0f'></iframe>

## step 2: export from voyant
Hover over and click on the "export" button that only appears when hovering (cannot capture with screenshot)
![image](https://user-images.githubusercontent.com/14779727/118016677-ac3f7800-b323-11eb-92aa-3044c0a3f219.png)

## step 3: export current data as tab-delimited
![image](https://user-images.githubusercontent.com/14779727/118016817-d8f38f80-b323-11eb-9ae4-376ab6d7b3eb.png)

## step 4: copy and paste into Atom (or other text editor)
![image](https://user-images.githubusercontent.com/14779727/118016918-fcb6d580-b323-11eb-92d7-9f92e8633f56.png)
![image](https://user-images.githubusercontent.com/14779727/118017110-3556af00-b324-11eb-9c39-0866d7cd1729.png)

## step 5: in Atom, remove first line (voyant header) and numbers (either manually or with regex)
Do a find+replace with `ctrl+f` and choosing regex (see arrow)
Use the expression `^\s[0-9]+` to only find the numbers at the beginning of the line (applied by voyant) so that if there are any numbers in the actual corpus itself they are not also removed.
`^` is beg of line
`\s` is spaces

![image](https://user-images.githubusercontent.com/14779727/118017440-9c746380-b324-11eb-9653-e465c33a0d14.png)

## step 6: save the result of "women vocabulary" as .txt (using "save as"):
[women-vocabulary.txt](https://github.com/cu-mkp/sandbox/files/6468040/women-vocabulary.txt)

![image](https://user-images.githubusercontent.com/14779727/118018133-6a173600-b325-11eb-8581-0126aff3b98b.png)

## step 7: use free online word cloud generator to create wordcloud
E.g., https://www.wordclouds.com/
![women-vocabulary](https://user-images.githubusercontent.com/14779727/118018958-6df78800-b326-11eb-907f-037dc609284a.png)
