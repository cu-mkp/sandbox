# My work at the Making and Knowing Project

[Dana Chaillard](https://github.com/danachaillard), Ecole Polytechnique

Summer 2020

I would like to thank everyone at the Project that I had the chance to work with, Pamela H. Smith, Naomi Rosenkranz, Terry Catapano, Roni Kaufman, Matthew Kumar, Gregory Schare and Tianna Helena Uchacz. It was a wonderful experience working with you all.

All my code can be found at: <https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard>. The readme should allow you to get everything running.

My work consisted in three tasks. 

## Word Clouds

The first one was to create word clouds from the categories in the thesaurus. This was done in the file [word_clouds.py](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds.py) using a specific Python package. For each semantic tag, there is a word cloud in the [word cloud file](https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard/word_clouds).

One example, using the animal tag, is shown below. The remaining wordclouds for all other tags can be seen in [All Wordclouds](Chaillard_wordclouds.md).

### Animals
![animals-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/animal.png?raw=true)

## Semantic Trees

The second task was to create semantic trees from the vocabulary in the thesaurus. Once again category by category. These were created in the [vocabulary_abstraction.ipiynb](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/vocabulary_abstraction.ipynb) jupyter notebook. The trees are only to be found in the notebook. They were created using wordnet, which is a corpus that can give us the hypernyms of a word. For the the trees, I used only the tagged expressions in the thesaurus that are single words. I also had to clean the data to remove words not in the corpus or where the correct meaning we are looking for is not in the corpus.

An example tree for Animals is provided below. All trees created (for Animals, Body Parts, Materials, and Tools) can be seen in [All Semantic Trees](Chaillard_trees.md). They can also be seen (with context) in the Jupyter Notebook, [vocabulary_abstraction.ipiynb](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/vocabulary_abstraction.ipynb).

### Animals
```
                                  ┌musteline_mammal─weasel
                                  │      ┌wolf
                        ┌carnivore┼canine┤
                        │         │      └dog─hunting_dog─water_dog
                        │         └feline─cat
                        │      ┌squirrel
                        │      ├dormouse
                        ├rodent┼mouse
                        │      ├rat
                        │      └porcupine
                        ├swine─hog
                        │      ┌horse
                        ├equine┤
                        │      └mule
                 ┌mammal┤
                 │      ├primate─homo
                 │      │        ┌sheep─ewe
                 │      │        │      ┌cow
                 │      │        ├cattle┼beef
                 │      │        │      └ox
                 │      ├ruminant┤
                 │      │        ├goat
                 │      │        └deer─hart
                 │      ├bat
                 │      └rabbit
                 │                 ┌waterfowl─duck
                 │    ┌aquatic_bird┼swan
                 │    │            └heron─bittern
                 │    │         ┌lark
                 │    │         ├new_world_oriole─meadowlark
                 │    │         │     ┌linnet
                 │    │         │     ├chaffinch
                 │    │         ├finch┼goldfinch
                 │    │         │     ├siskin
                 │    │         │     └bunting─ortolan
                 │    ├passerine┤
                 │    │         ├crow
                 │    │         ├nightingale
                 │    │         └swallow
                 ├bird┼bird_of_prey─eagle
                 │    │                 ┌game_bird─partridge
                 │    │                 │                     ┌hen
                 │    ├gallinaceous_bird┼domestic_fowl─chicken┤
                 │    │                 │                     └chick
                 │    │                 └pigeon─dove─turtledove
                 │    └cuckoo
                 │    ┌cod
      ┌vertebrate┼fish┤
      │          │    └bowfin
      │          │       ┌snake─viper
      │          ├reptile┼turtle
      │          │       └saurian─lizard─dragon
      │          └amphibian─frog
      │     ┌mealworm
      ├larva┤
      │     └caterpillar─silkworm
animal┤
      │                    ┌cephalopod─cuttlefish
      │            ┌mollusk┼gastropod─snail
      │            │       │       ┌oyster
      │            │       └bivalve┤
      │            │               └mussel
      │            │                ┌lepidopterous_insect─butterfly
      │            │                ├flea
      │            │                ├homopterous_insect─cicada
      │            │         ┌insect┼louse
      │            │         │      ├grasshopper
      │            │         │      ├hymenopterous_insect─ant
      │            │         │      └dipterous_insect─fly
      ├invertebrate┼arthropod┼arachnid─spider
      │            │         │          ┌crayfish
      │            │         └crustacean┤
      │            │                    └crab
      │            └worm─earthworm
      │                  ┌calf
      └young─young_mammal┼lamb
                         └foal─colt
```


## Sentence Embeddings Using Machine Learning

The third task was to create sentence embeddings using a machine learning approach. For that, I used a pretrained ELMo model found on tensorflow_hub. ELMo generates a 1024 dimensions vector for each sentence. I then used PCA and t-SNE to reduce these dimensions to 2 and plotted that in an html file. All these files can be found in the [sentence_encode directory](https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard/Sentence_encode). I also created a graph where two categories are plotted in different colors. It is called sentence_encode_dual.


