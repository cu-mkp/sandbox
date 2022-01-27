# Transcribing, Translating, and Encoding MS Gen, 262: *Sefer Refu'os u-Segulos / Book of Remedies and Incantations*
Charlie Steinman
Fall 2021

## About the MS

[<u>Columbia MS Gen.
262</u>](https://archive.org/details/ldpd_11728201_000) is a collection
of recipes and other instructional texts written by a Yiddish-speaking,
Jewish practitioner in Northern Italy around 1470. The bulk of the
manuscript is in a dialect of Old Western Yiddish, bearing witness to
the increasing presence of Jews from the German-speaking lands in Italy.
Nonetheless, it is a decidedly multilingual document. Most recipes not
written in Yiddish are written in Hebrew, although there is one
incantation in Ladino. The Yiddish and Hebrew bleed freely into one
another, and the manuscript is peppered with little bits of the local
Italian vernacular, mostly for naming/glossing plants and other objects.
There are also some magical words in Latin and Aramaic.

The manuscript was held in a private collection until 2015, when
Columbia purchased it at a Sotheby’s auction. Since then, it has gone
almost completely ignored by scholars. The only scholarly treatment of
the manuscript was a robust but incomplete and unpublished report that
Shlomo Zucker provided for Sotheby’s. Zucker’s report is invaluable.
First, he transcribes and translates several entries, which laid a lot
of linguistic and paleographic groundwork for my own project. Second, he
was able to identify the date and region of production of the undated
manuscript by matching the paper’s watermark with paper produced in
Venice in the 1470s. This allows us to place the manuscript in a more
certain historical context, where many medieval Hebrew and Yiddish
manuscripts are left without such detail.

The manuscript as it exists today is 29 folios long, but its original
foliation makes fully clear that it was once part of a much longer
manuscript. Mere weeks ago, Michelle Chesner, the Judaica librarian at
Columbia, discovered with colleagues in Germany that its lost sibling is
in fact Ms hebr. oct. 131 at the Goethe-Universität in Frankfurt. Fols.
184v-190v (at the end of the ms) are clearly part of the same work; the
hand is identical, the layout of the pages is similar, and the Hebrew
foliation matches up. There is one problem, however: the
Goethe-Universität’s catalog dates this manuscript as seventeenth
century. While there are certainly parts of the manuscript that are
later additions, to my eye the handwriting of the bulk of the manuscript
can be no later than the sixteenth. Furthermore, the manuscript is
written in several different hands, so it is likely the different
sections were produced at different times. Finally, I tried to track
down the origin of the seventeenth-century date. The catalog cites the
section of the *Verzeichnis der orientalischen Handschriften in
Deutschland* dedicated to Hebrew manuscripts, published in 1982.[1] The
entry for the Frankfurt manuscript cites Rafael Rabbinowicz’s 1888
Hebrew manuscript catalog,[2] and indicates that there is no evidence
for the 1626 date that Rabbinowicz provides. As such, both I and
Michelle Chesner believe that Zucker’s fifteenth-century dating is more
reliable.

Most of these texts are remedies and other medical advice, but there is
a significant minority of non-medical texts. Some of these are magical
or mystical in nature. Among others, there are two recipes for banishing
the evil eye, one for resisiting torture, one for revealing a thief, and
one for freeing a prisoner. These are where the multicultural nature of
the manuscript shines through clearly. First, one of the recipes for the
evil eye is written in Ladino, and is thus a testament to the mixing of
Spanish-speaking and German-speaking Jews in Northern Italy. Second, the
procedure for revealing a thief uses a child as a medium to speak to the
mystical messenger (a woman referred to as “madama”). While this entry
is written in Yiddish, this child communicates with her solely in
Italian. Third, the instructions for helping a prisoner escape prescribe
the use of the name of Christ in a (vaguely) Latin incantation. The
author insists that one should only use this in the most dire
circumstances, as it uses an “impure name.” He also claims that he
learned it from a convert to Judaism. This may indeed be so, although
Zucker believes he learned it from a non-Jew and uses this story as a
cover. Nevertheless, it indicates the exchange of magical knowledge
between Jews and non-Jews in this place and time. At the same time, it
also draws on much older traditions of Jewish magic. One recipe for
clearing a fishbone stuck in one’s throat uses an incantation taken from
the Babylonian Talmud, Tractate Shabbat 67a, although the instructions
are in Yiddish. As such, this manuscript is an excellent object for the
study of the transmission and adaptation of magico-medical techniques.

This project is in large part a proof of concept for the portability and
flexibility of the techniques applied to the Making and Knowing
Project’s edition of BnF Ms. Fr. 640 to other premodern documents of
practice. The schema I have used to markup MS Gen. 262 is a modified
version of the [<u>M&K Project’s
schema</u>](https://github.com/cu-mkp/m-k-manuscript-data/blob/master/schema/ms-transcription.rng).
I have made changes mostly to reflect the differences in genre/context
and language.

## The Schema

### Genre/Context

Ms. Fr. 640 most closely resembles the early modern “book of secrets”;
most of all it is a manuscript that clearly had its genesis in the
workshop. Gen Ms. 262 comes from the medieval Hebrew tradition of
*sifrei refuot u-segulot* (books of remedies and charms); these books
are a combination of medical remedies and magic/mysticism (both ancient
Jewish magic and practical kabbalah), and there is significant overlap
between the two. As such, many of the things I added to the schema were
meant to make space for the sort of magic and mysticism contained in the
manuscript. Some of these are straightforward. For example, magical
incantations play a large part in the techniques of the manuscript, so I
wanted an “incantations” (\<inc/>) element. Similarly, medieval Jewish
magic, like its other premodern counterparts, makes heavy use of magical
names, especially those of angels. The “personal name” tag used for Fr.
640 did not seem to fit the bill for figures like “Metatron” and
“Uziel”—including them with the names of the author’s sources and
informers would only muddy the waters. So, I added a “magical names”
(\<mn/>) tag. Finally, and perhaps less intuitively, I wanted to add a
tag for Psalms (\<ps/>). There is a significant corpus of Jewish magic
(that overlaps heavily with prayer) that prescribes the use of
particular Psalms for different problems. As such, I wanted a way to
separate the Psalmic text in the manuscript from the other incantations.
In hindsight, this may be too narrow. Another way to get at this problem
might be to develop a better system for citation and quotation, as there
are certainly other sources cited/quoted than just the Psalms. I have
added a “citation” attribute and enabled it for the Psalm and
incantation elements, as some of the incantations have sources I have
been able to identify.

### Language

The changes I made to the language elements in the M&K schema were quite
basic, and speak to the portability of the schema. One can simply
replace the languages of the author-practitioner with the languages used
by any other scribe or author. In my case, these were Old Western
Yiddish (\<owy/>), Hebrew (\<heb/>), Judeo-Italian (\<jit/>), La’az
(Romance; \<laz/>), Ladino (\<lad/>), Latin (\<lat/>), and Aramaic
(\<arm/>). There were some challenges here. First, I was (and remain)
unsure of how to describe the Italian vernacular used in the document. I
do not know if I should refer to it as “Judeo-Italian,” or if I should
even describe it as “Italian.” Second, I chose to add an element for
“La’az” (a Hebrew word of uncertain origin that is probably an acronym
that stands for “lashon am zeh,” language of this nation), which refers
broadly to any non-Hebrew vernacular, but most often to any Romance
language. I added this for any entry that the scribe glosses with
“la’az,” but where the word in question is clearly Romance but its
actual origin cannot be specified. Finally, I am confident in using the
term “Old Western Yiddish” to describe the language in which most of the
manuscript is written. I am less confident, however, about my choice to
use this element to tag the scribe’s German glosses. He often glosses a
word with “lashon Ashkenaz” (the language of Germany), and does so in
entries written in both Yiddish and Hebrew. Perhaps these glosses
deserve their own language entry. Alternatively, perhaps there is a
better way I could deal with glosses.

There were also some basic technical challenges. It is extremely
challenging to do XML markup for languages that read right-to-left.
Because the markup itself scans left to right, the visible order of
words in any given xml document becomes very muddled very quicky.
“Author mode” in Oxygen XML Editor fixes the word order issue quite
nicely, but it is more difficult to do markup there than it is in the
normal “text mode.”

Furthermore, both the M&K Schema and other existing markup systems like
TEI have robust vocabulary for paleographic and codicological elements.
I have had to adapt some of these to such elements that are unique to
languages written in the Hebrew alphabet. First these languages (for the
most part) do not vocalize with individual characters, but with marks
called *nikkud* that are attached to the letters themselves, much like
accent marks. There are unicode characters for all of these, but I
wanted a way to indicate with the markup when the scribe chose to
vocalize words. He uses it for foreign words, scriptural references, and
incantations, for the most part. He occasionally adds it for
Yiddish/German words as well. To aid in my analysis of the use of
*nikud*, I created a \<voc/> tag.

### Future Changes

To most effectively use the schema, I would like to make more
adaptations as I move forward with the project. Because it is mostly a
magico-medical manuscript, I would like to add more elements that deal
with technique, as the \<md/> element alone doesn’t seem to suffice for
a dedicated medical text. I will likely do the same for magic.

I will also transcribe and translate the parts of the text preserved in
the Frankfurt manuscript. Any holistic analysis of the manuscript seems
silly at this point, knowing six folios of it are known to be elsewhere.
I am not sure about how I want to deal with the rest of that manuscript;
I will need to do more research about how this text fits in with the
codex more broadly.

I hope you enjoy looking at what I have done thus far, and I apologize
for its rough state. Please see the [<u>github
repository</u>](https://github.com/cu-mkp/ms-262-data) for my project to
look at the markup.

[1] Ernst Róth and Leo Prijs, *Hebräische Handschriften*, (Stuttgart:
Steiner, 1982) 1A:185-187.

[2] Raphael Nata Rabbinowicz, *Ohel Avraham: Reshimat Ha-Sefarim Asher
Asaf ve-Kibez* (Munich: E. Hover, 1888), 6.
