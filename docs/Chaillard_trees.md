# 2020 Chaillard Final Project
See [Applying Machine Learning to the Manuscript: Semantic Trees, Word Clouds, and Sentence Embedding](/sandbox/docs/Chaillard_final-report) for the full report.

## Semantic Trees

The first project was to create word clouds from the categories in the thesaurus. This was done in the file [word_clouds.py](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds.py) using a specific Python package. For each semantic tag, there is a word cloud in the [word cloud file](https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard/word_clouds).
## 

The second project was to create semantic trees from the vocabulary in the thesaurus. Once again category by category. These were created in the [vocabulary_abstraction.ipiynb](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/vocabulary_abstraction.ipynb) jupyter notebook. The trees are only to be found in the notebook. They were created using wordnet, which is a corpus that can give us the hypernyms of a word. For the the trees, I used only the tagged expressions in the thesaurus that are single words. I also had to clean the data to remove words not in the corpus or where the correct meaning we are looking for is not in the corpus.


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

### Body Parts
```

                                                                                      ┌saliva
                                                                            ┌secretion┤
                                                                            │         └mucus─phlegm
                                       ┌body_substance─liquid_body_substance┤
                                       │                                    └blood
                      ┌matter─substance┤
                      │                │        ┌waste─body_waste─urine
                      │                └material┤
                      │                         └mineral─ore
                      │                                 ┌elbow
                      │               ┌joint─hinge_joint┤
                      │               │                 └knee
                      │               │                         ┌rima─mouth
                      │               │         ┌passage─orifice┤
                      │               │         │               └naris─nostril
                      │               │         ├horny_structure─nail─fingernail
                      │               ├structure┤
                      │               │         ├tube─vessel─blood_vessel─vein
                      │               │         └cavity─armpit
                      │               │                  ┌face
                      │               │                  │         ┌hand─fist
                      │               │                  │         │     ┌finger─thumb
                      │               │                  │         ├digit┤
                      │               │                  │         │     └two
                      │               │                  │         │    ┌arm
                      │               │                  ├extremity┼limb┼thigh
                      │               │                  │         │    └leg
                      │               │                  │         ├vertebrate_foot─foot
                      │               │                  │         └end─tip─fingertip
                      │               ├external_body_part┤
                      │               │                  ├head
                      │               │                  └neck
                      │               │                    ┌connective_tissue─bone─tooth
                      │               ├tissue─animal_tissue┤
                      │               │                    └flesh
                      │               │                 ┌eye
                      │               │     ┌sense_organ┼chemoreceptor─nose
                      │               │     │           └ear
                      │               │     │              ┌stomach
                      │               │     ├internal_organ┤
                      │               │     │              └liver
                      │     ┌body_part┼organ┤
                      │     │         │     ├speech_organ─articulator─tongue
                      │     │         │     └reproductive_organ─nipple
                      │     │         │       ┌cheek
                      │     │         ├feature┼temple
                      │     │         │       └brow
                      │     │         ├area─palm
                      │     │         ├abdomen
                      │     │         └back
                      ├thing┤
                      │     └unit─molecule─macromolecule─lipid─wax─cerumen
      ┌physical_entity┤
      │               │                                      ┌perspiration
      │               │       ┌organic_process─bodily_process┤
      │               │       │                              └breath
      │               ├process┤
      │               │       └phenomenon─natural_phenomenon─physical_phenomenon─atmospheric_phenomenon─weather─wind
      │               │      ┌whole─natural_object─covering─body_covering─hair
      │               └object┤
      │                      └location─region
entity┤
      │           ┌psychological_feature─cognition─information─stimulation─negative_stimulus─concern
      │           │         ┌shape─amorphous_shape─space─enclosure─matrix
      └abstraction┼attribute┤
                  │         └state─condition─physical_condition─pathological_state─ill_health─injury─wound
                  │       ┌definite_quantity─number─integer
                  └measure┤
                          │                   ┌small_indefinite_quantity─handful
                          └indefinite_quantity┤
                                              └containerful
```

### Materials
```
                                                      ┌egg
                                                      ├flour
                                            ┌foodstuff┼concoction─dough
                                            │         │                              ┌sugar
                                            │         │                   ┌sweetening┼honey
                                            │         │                   │          └syrup
                                            │         │          ┌flavorer┼spice─clove
                                            │         │          │        └condiment─vinegar
                                            │         ├ingredient┤
                                            │         │          └egg_yolk
                                            │         │             ┌cheese
                                            │         └dairy_product┤
                                            │                       └butter
                                            │        ┌milk
                                            ├beverage┼tea─herb_tea─tisane
                                            │        └alcohol─wine
                                            │                ┌gelatin
                                            │         ┌dainty┤
                                            │         │      │     ┌chewing_gum
                                            │         │      └sweet┤
                                            │         │            └confiture─conserve
                                            ├nutriment┤
                                            │         └dish─soup─broth
                                       ┌food┤
                                       │    │                        ┌bean
                                       │    ├produce─vegetable─legume┤
                                       │    │                        └pea
                                       │    ├baked_goods─bread
                                       │    └feed─fodder─hay
                                       │                 ┌fertilizer─organic─manure
                                       │        ┌chemical┤
                                       │        │        │                              ┌fresh_water─rain
                                       │        │        │        ┌binary_compound─water┤
                                       │        │        │        │                     └seawater
                                       │        │        │        ├caustic─lye
                                       │        │        │        ├hydroxide─calcium_hydroxide
                                       │        │        │        ├nitrate─potassium_nitrate
                                       │        │        │        │    ┌vitriol
                                       │        │        │        ├acid┤
                                       │        │        │        │    └carboxylic_acid─acetic_acid─acetum
                                       │        │        └compound┤
                                       │        │                 │     ┌trioxide─arsenic
                                       │        │                 │     ├silica─flint─firestone
                                       │        │                 ├oxide┼calcium_oxide
                                       │        │                 │     ├ferric_oxide─rust
                                       │        │                 │     └red_lead
                                       │        │                 ├organic_compound─resin
                                       │        │                 │    ┌calcium_sulphate─gypsum─alabaster
                                       │        │                 ├salt┤
                                       │        │                 │    └cream_of_tartar
                                       │        │                 ├formulation─cleansing_agent─soap
                                       │        │                 └incense
                                       │        │       ┌garnet
                                       │        │       ├realgar
                                       │        │       │                 ┌agate
                                       │        │       │      ┌chalcedony┤
                                       │        │       │      │          └bloodstone
                                       │        │       ├quartz┼amethyst
                                       │        │       │      └topaz
                                       │        │       │     ┌aquamarine
                                       │        │       ├beryl┤
                                       │        │       │     └emerald
                                       │        │       ├hemimorphite
                                       │        │       ├ore─lead_ore─massicot
                                       │        │       │           ┌umber
                                       │        │       ├earth_color┤
                                       │        │       │           └ocher
                                       │        │       ├borax
                                       │        ├mineral┤
                                       │        │       ├spar─calcite─chalk
                                       │        │       ├orpiment
                                       │        │       ├talc
                                       │        │       ├mica
                                       │        │       ├emery
                                       │        │       ├cinnabar
                                       │        │       ├zircon─hyacinth
                                       │        │       └corundom─sapphire
                                       │        │                            ┌storax
                                       │        │                            ├amber
                                       │        │                            ├camphor
                                       │        │              ┌natural_resin┼gum_resin─benzoin
                                       │        │              │             ├colophony
                                       │        │              │             ├mastic
                                       │        │              │             └oleoresin─turpentine
                                       │        ├plant_material┼chaff─bran
                                       │        │              │    ┌sandarac
                                       │        │              │    ├sumac
                                       │        │              │    ├wicker
                                       │        │              │    ├chestnut
                                       │        │              │    ├fir
                                       │        │              └wood┤
                                       │        │                   ├maple
                                       │        │                   ├ebony
                                       │        │                   ├boxwood
                                       │        │                   ├brazilwood
                                       │        │                   └sandalwood
                                       │        │    ┌marble
                                       │        │    ├gravel
                                       │        │    ├igneous_rock─porphyry
                                       │        ├rock┼sedimentary_rock─shale
                                       │        │    ├limestone─rottenstone
                                       │        │    ├pebble
                                       │        │    └pumice
                                       │        │                               ┌straw
                                       │        ├fiber─natural_fiber─plant_fiber┤
                                       │        │                               └cotton
                                       │        ├packing_material─cardboard
                                       │        │          ┌clay
                                       │        ├earth─soil┼mud
                                       │        │          └sand
                                       │        │               ┌feather─down
                                       │        │               ├animal_oil─tallow
                                       │        ├animal_material┤
                                       │        │               │              ┌animal_skin─leather
                                       │        │               ├animal_product┼ambergris
                                       │        │               │              └animal_fiber─horsehair
                                       │        │               └dentine─ivory
                                       │        │                     ┌tragacanth
                                       │        ├discharge─exudate─gum┤
                                       │        │                     └ammoniac
                                       ├material┤
                                       │        ├particulate─dust
                                       │        ├sealing_material─lute
                                       │        ├atom─grinding
                                       │        │     ┌parchment
                                       │        ├paper┤
                                       │        │     └card
                                       │        │                ┌urine
                                       │        │     ┌body_waste┤
                                       │        │     │          └fecal_matter─droppings
                                       │        ├waste┤
                                       │        │     └impurity
                                       │        │                         ┌white_lead
                                       │        │                         ├bole
                                       │        │                 ┌pigment┤
                                       │        │                 │       ├verdigris
                                       │        │                 │       └bister
                                       │        ├coloring_material┼dye─cochineal
                                       │        │                 └tincture
                                       │        │         ┌silver
                                       │        ├conductor┤
                                       │        │         └copper
                                       │        ├adhesive_material
                                       │        └foam
                                       │       ┌colloid─sol
                                       │       │     ┌electrum
                                       │       │     ├steel
                                       │       │     ├solder
                                       │       ├alloy┤
                                       │       │     ├brass─latten
                                       │       │     ├amalgam
                                       │       │     └bronze
                             ┌substance┼mixture┤
                             │         │       ├composition─paste
                             │         │       └solution─sap
                             │         │                                 ┌iron
                             │         │                                 ├noble_metal─gold
                             │         │                                 ├lead
                             │         │                                 ├mercury
                             │         │                ┌metallic_element┤
                             │         │                │                ├antimony
                             │         │                │                ├manganese
                             │         │                │                ├tin
                             │         │                │                └aluminum─alum
                             │         ├chemical_element┼sulfur
                             │         │                │      ┌charcoal
                             │         │                └carbon┤
                             │         │                       └carbon_black
                             │         │              ┌solid_body_substance─enamel
                             │         └body_substance┤
                             │                        │                               ┌mucus─phlegm
                             │                        │                     ┌secretion┼saliva
                             │                        │                     │         └musk
                             │                        └liquid_body_substance┼blood
                             │                                              └juice─digestive_juice─bile
                             │                            ┌coral
                             │     ┌crystal─gem─opaque_gem┤
                             │     │                      └jasper
                             │     ├glass
                             ├solid┤
                             │     ├powder
                             │     └precipitate─sludge
                      ┌matter┤
                      │      ├residue─ash
                      │      │         ┌sublimate
                      │      │     ┌gas┤
                      │      │     │   └air
                      │      └fluid┤
                      │            └liquid─ink
                      │                                                                   ┌rye
                      │                                                             ┌grain┤
                      │                                                             │     └barley
                      │                                                        ┌seed┼nut─edible_nut─walnut
                      │                                                        │    └oilseed─rapeseed
                      │                                                  ┌fruit┤
                      │                                                  │     └edible_fruit─citrus─orange
                      │                                      ┌plant_organ┤
                      │                                      │           └stalk─bulb─onion
                      │                           ┌plant_part┤
                      │                           │          └plant_tissue─pith
                      │            ┌natural_object┤
                      │            │              │             ┌cork
                      │            │              │        ┌bark┤
                      │            │              │        │    └cinnamon
                      │            │              │        │       ┌varnish
                      │            │              │        ├coating┼gilt
                      │            │              │        │       └paint─distemper
                      │            │              └covering┤
                      │            │                       ├shell
                      │            │                       │             ┌hair
                      │            │                       └body_covering┤
                      │            │                                     └skin
                      │            │                           ┌blue─azure
                      │            │                  ┌clothing┤
                      │            │                  │        └garment─spat
                      │            │        ┌commodity┤
                      │            │        │         └grocery
                      │            │        │                 ┌brick
                      │            │        ├building_material┼covering_material─plaster─stucco
                      │            │        │                 │               ┌glue
                      │            │        │                 └concrete─cement┤
                      │            │        │                                 └putty
                      │            │        │         ┌string
                      │            │        ├line─cord┤
                      │            │        │         └thread
                      │            │        │          ┌nailhead
                      │            │        ├decoration┼tinsel
                      │            │        │          │                       ┌diamond
                      │            │        │          │         ┌jewelry─jewel┼pearl
                      │            │        │          │         │             └ruby
                      │            │        │          └adornment┤
                      │            │        │                    └rosette
                      │            │        │                         ┌box─carton
                      │            │        │               ┌container┤
                      │            │        │               │         └mold
                      │            │        │               ├conveyance─vehicle─craft─aircraft─airplane─jet
                      │            │        │               ├toiletry─perfume
                      │            │        │               ├hardware
                      │            │        │               │      ┌instrument─measuring_instrument─scale
                      │            │        │               │      ├lamp─candle
                      │            │        ├instrumentality┼device┤
                      │            │        │               │      ├magnet
                      │            │        │               │      └noisemaker─horn
                      │            │        │               │         ┌utensil─earthenware
                      │            │        │               ├implement┤
                      │            │        │               │         │                 ┌pen─quill
                      │            │        │               │         └writing_implement┤
                      │            │        │               │                           └crayon
                      │            │        │               │         ┌game_equipment─ball
                      │            │        │               ├equipment┤
                      │            │        │               │         └sports_equipment─base─home_plate
                      │            │        │               ├connection─attachment─ligament─wire
                      │            │        │               │        ┌ammunition
                      │            │        │               └weaponry┤
                      │            │        │                        └armament─artillery─cannon─mortar
                      │      ┌whole┼artifact┼creation─representation─document─letter
                      │      │     │        │         ┌building_complex
                      │      │     │        ├structure┼horny_structure─nail
                      │      │     │        │         └germ
                      │      │     │        │      ┌silk
                      │      │     │        │      ├cambric
                      │      │     │        │      ├wool
                      │      │     │        │      ├satin
                      │      │     │        │      ├velvet
                      │      │     │        ├fabric┼canvas
                      │      │     │        │      ├felt
                      │      │     │        │      ├buckram
                      │      │     │        │      ├metallic
                      │      │     │        │      ├linen
                      │      │     │        │      └taffeta
                      │      │     │        │          ┌tablet─slate
                      │      │     │        ├block─slab┤
                      │      │     │        │          └tile
                      │      │     │        ├weight─bob─plumb_bob
                      │      │     │        └excavation─mine
                      │      │     │                                ┌reseda
                      │      │     │                                ├viola─pansy
                      │      │     │                                ├fenugreek
                      │      │     │                                ├fraxinella
                      │      │     │                           ┌herb┼rue
                      │      │     │                           │    ├oxalis
                      │      │     │                           │    ├rosemary
                      │      │     │                           │    │                             ┌millet
                      │      │     │                           │    ├gramineous_plant─grass─cereal┤
                      │      │     │                           │    │                             └wheat
                      │      │     │                           │    └crucifer─mustard
                      │      │     │                           │                ┌nut_tree─hazelnut
                      │      │     │                           │                ├elm
                      │      │     │                           │           ┌tree┤
                      │      │     │                           │           │    ├willow
                      │      │     │                           │           │    └fruit_tree─almond_tree─almond
                      │      │     │                           ├woody_plant┤
                      │      │     │                           │           │     ┌rose
                      │      │     │                           │           └shrub┼heath─heather
                      │      │     │                           │                 └saltwort
                      │      │     │                           │                        ┌madderwort─madder
                      │      │     │                           ├spermatophyte─angiosperm┤
                      │      │     │                           │                        │      ┌bellwort─strawflower
                      │      │     │                           │                        └flower┼columbine
                      │      │     │                           │                               └floret
                      │      │     │                     ┌plant┤
                      │      │     │                     │     │             ┌iridaceous_plant─crocus─saffron
                      │      │     │                     │     ├bulbous_plant┤
                      │      │     │                     │     │             └liliaceous_plant─alliaceous_plant─garlic
                      │      │     │                     │     ├succulent─aloe
                      │      │     │                     │     └pteridophyte─fern_ally─horsetail
                      │      │     │                     │      ┌basidiomycete─agaric─mushroom
                      │      │     └living_thing─organism┼fungus┤
                      │      │                           │      └puffball
                      │      │                           │                   ┌worm─annelid─oligochaete─earthworm
                      │      │                           │      ┌invertebrate┤
                      │      │                           │      │            └arthropod─arachnid─spider
                      │      │                           │      │        ┌carnivore─viverrine─civet
                      │      │                           └animal┼chordate┤
                      │      │                                  │        │                       ┌bovine─cattle─beef
                      │      │                                  │        └ungulate─ruminant─bovid┤
                      │      │                                  │                                └sheep
                      │      │                                  └larva─mealworm
                      ├object┤
                      │      │               ┌layer─crust
                      │      │        ┌region┤
                      │      │        │      │    ┌center
                      │      │        │      └area┤
                      │      │        │           └room─operating_room
                      │      └location┤
                      │               └point─position─pitch
                      │                                       ┌oil─grease
                      │                                 ┌lipid┼wax─cerumen
                      │                                 │     └fat─lard
                      │     ┌unit─molecule─macromolecule┤
                      │     │                           └carbohydrate─polysaccharide─starch─arum
                      │     │                     ┌flesh
                      │     │    ┌body_part─tissue┤
                      │     │    │                │                 ┌bone
                      │     │    │                └connective_tissue┤
                      │     │    │                                  └marrow
      ┌physical_entity┼thing┼part┤
      │               │     │    │        ┌ember
      │               │     │    └fragment┤
      │               │     │             └filing
      │               │     └body_of_water─lake
      │               ├process─phenomenon─natural_phenomenon─physical_phenomenon─cloud─aerosol─smoke
      │               │                       ┌medicine─remedy─ointment
      │               │            ┌agent─drug┤
      │               │            │          └narcotic─opiate
      │               │            │      ┌white
      │               └causal_agent┼person┼bad_person─victimizer─slaver
      │                            │      └black
      │                            └vital_principle─spirit
entity┤
      │                                           ┌activity─work─labor─manual_labor─application─tinning
      │           ┌psychological_feature─event─act┼action─change─change_of_integrity─joining─fastening─bonding
      │           │                               └propulsion─pull─draw─tow
      │           │                                                            ┌scarlet
      │           │                                                        ┌red┤
      │           │                                                        │   └crimson
      │           │         ┌property─visual_property─color─chromatic_color┤
      │           │         │                                              └purple
      │           │         │                                  ┌unsanitariness─filth
      │           ├attribute┼state─condition─sanitary_condition┤
      │           │         │                                  └dirtiness─dirt
      │           │         └shape─amorphous_shape─space─expanse─sheet─foil
      │           │     ┌social_group─organization─association─club
      └abstraction┼group┤
                  │     └collection─agglomeration─bunch─tuft─wisp
                  ├communication─language─natural_language─afroasiatic─semitic─arabic
                  └measure─system_of_measurement─standard
```

### Tools
```
                                                      ┌drygoods─white_goods─linen─table_linen─napkin
                                                      │        ┌headdress─hat
                                            ┌commodity┼clothing┤
                                            │         │        └handwear─glove
                                            │         └durables─appliance─home_appliance─kitchen_appliance─oven
                                            │                             ┌ramrod
                                            │                         ┌rod┤
                                            │                         │   └baton
                                            │                         │    ┌rake
                                            │                         │    │                ┌chisel─burin
                                            │                         │    ├cutter─edge_tool┤
                                            │                         │    │                └knife─pocketknife─penknife
                                            │                         │    │     ┌auger
                                            │                         ├tool┼drill┤
                                            │                         │    │     └bore_bit
                                            │                         │    │         ┌scraper
                                            │                         │    │         ├pick─toothpick
                                            │                         │    │         ├pincer
                                            │                         │    ├hand_tool┼shovel
                                            │                         │    │         ├awl
                                            │                         │    │         ├trowel
                                            │                         │    │         └file
                                            │                         │    └ram─rammer
                                            │                         ├sharpener─grindstone
                                            │                         │     ┌staff─crutch
                                            │                         ├stick┤
                                            │                         │     └walking_stick─cane
                                            │                         │                       ┌pot─caldron
                                            │                         ├utensil─cooking_utensil┼pan─frying_pan
                                            │                         │                       └turner─spatula
                                            │               ┌implement┼brush
                                            │               │         ├bar─crossbar
                                            │               │         │                 ┌crayon
                                            │               │         ├writing_implement┤
                                            │               │         │                 └pen─quill
                                            │               │         ├beater
                                            │               │         ├leather_strip─strap
                                            │               │         └sports_implement─mallet
                                            │               │      ┌heater─brazier
                                            │               │      │       ┌press
                                            │               │      │       ├stamp
                                            │               │      │       ├machine_tool─shaper─lathe
                                            │               │      ├machine┼power_tool─power_saw
                                            │               │      │       ├textile_machine─loom
                                            │               │      │       ├inclined_plane
                                            │               │      │       └wheel
                                            │               │      ├filter─strainer─sieve
                                            │               │      ├applicator─paintbrush
                                            │               │      │                             ┌syringe
                                            │               │      │          ┌medical_instrument┤
                                            │               │      │          │                  └surgical_instrument─trepan
                                            │               │      │          │                    ┌measuring_stick─rule
                                            │               │      ├instrument┼measuring_instrument┼sandglass─hourglass
                                            │               │      │          │                    └clock
                                            │               │      │          └navigational_instrument─compass
                                            │               │      │       ┌bedpost
                                            │               │      │       │    ┌trivet
                                            │               │      │       ├base┤
                                            │               │      │       │    └home_plate
                                            │               │      │       ├structural_member─upright─post─stake
                                            │               │      ├support┤
                                            │               │      │       ├rack─tripod─easel
                                            │               │      │       ├shelf
                                            │               │      │       └stirrup
                                            │               │      │              ┌clamp
                                            │               │      ├holding_device┼holder─candlestick
                                            │               │      │              └vise
                                            │               │      ├blower─bellows
                                            │               ├device┤
                                            │               │      │                  ┌screw─bolt
                                            │               │      │                  ├pin─peg
                                            │               │      ├restraint─fastener┤
                                            │               │      │                  ├catch─hook
                                            │               │      │                  └buckle
                                            │               │      ├lamp─candle
                                            │               │      ├noisemaker─horn
                                            │               │      ├musical_instrument─wind_instrument─brass─cornet
                                            │               │      ├mechanism─mechanical_device─striker─hammer
                                            │               │      │     ┌torch
                                            │               │      ├light┤
                                            │               │      │     └candlelight
                                            │               │      ├reflector─mirror
                                            │               │      └acoustic_device─bell
                                            │               │         ┌basket─frail
                                            │               │         │      ┌jar─vase
                                            │               │         │      ├basin
                                            │               │         │      │      ┌phial
                                            │               │         │      ├bottle┤
                                            │               │         │      │      └flask
                                            │               │         │      ├bath
                                            │               │         │      ├bathtub
                                            │               │         │      ├bowl
                                            │               │         ├vessel┤
                                            │               │         │      ├ladle
                                            │               │         │      ├tub
                                            │               │         │      ├bucket
                                            │               │         │      ├crucible
                                            │               │         │      ├retort─alembic
                                            │               │         │      └flagon
                                            │               │         ├box
                                            │               │         ├spoon
                                            │               ├container┤
                                            │               │         ├bag─pouch
                                            │               │         ├mold─matrix
                                            │               │         ├receptacle
                                            │               │         └drawer
                                            │               │        ┌ammunition─shell
                                            ├instrumentality┼weaponry┤
                                            │               │        └armament─artillery─cannon─mortar
                                            │               ├conveyance─vehicle─craft─aircraft─airplane
                                            │               │         ┌game_equipment─ball
                                            │               ├equipment┤
                                            │               │         └sports_equipment
                                            │               └furnishing─furniture─table
                                            │                        ┌pipe
                                            │           ┌conduit─tube┤
                                            │           │            └barrel
                                            ├way─passage┤
                                            │           └orifice─rima─mouth
                                            │                        ┌chamber─furnace─forge
                                            │              ┌enclosure┼recess─fireplace
                                            │              │         └cage
                                            │         ┌area┼palm
                                            │         │    └room─barroom
                                            │         ├horny_structure─nail─fingernail
                                            │         ├obstruction─blockage─plug─bung
                                            ├structure┤
                                            │         │                              ┌window
                                            │         ├supporting_structure─framework┼grate
                                            │         │                              └frame
                                            │         ├cavity─socket
                                            │         └building_complex
                                            │     ┌anvil
                                            ├block┤
                                            │     └slab─tile
                                            │        ┌cloth_covering─sleeve
                                   ┌artifact┼covering┤
                                   │        │        └protective_covering─sheath
                                   │        │     ┌panel─coffer
                                   │        ├sheet┤
                                   │        │     └board
                                   │        │      ┌canvas
                                   │        ├fabric┤
                                   │        │      └felt
                                   │        ├excavation─bore
                                   │        ├building_material─brick
                                   │        └article─ware─tableware─cutlery─fork
                                   │                   ┌igneous_rock─porphyry
                                   │                   ├sedimentary_rock─shale
                                   │              ┌rock┤
                                   │              │    ├limestone─rottenstone
                                   │              │    └marble
                             ┌whole┼natural_object┤
                             │     │              │                           ┌blade
                             │     │              │                      ┌leaf┤
                             │     │              │                      │    └simple_leaf─acerate_leaf
                             │     │              └plant_part─plant_organ┤
                             │     │                                     └fruit─seed─nut
                             │     │                           ┌pteridophyte─fern_ally─horsetail
                             │     │                           ├factory
                             │     │                     ┌plant┤
                             │     │                     │     ├woody_plant─tree─angiospermous_tree─almond_tree─almond
                             │     │                     │     └herb─gramineous_plant─reed
                             │     └living_thing─organism┤
                             │                           └animal─chordate─vertebrate─mammal─placental─bat
                             │             ┌quadrant
                             │             ├axis
                             │             │    ┌thread
                             │        ┌line┼cord┤
                             │        │    │    └string
                             │        │    ├rope
                             │        │    └isometric_line─contour
                      ┌object┼location┤
                      │      │        └region─top
                      │      └geological_formation─natural_depression─hole─pit
                      │      ┌residue─ash
                      ├matter┤
                      │      │                                  ┌animal_product─animal_skin─leather
                      │      │                  ┌animal_material┤
                      │      │                  │               └feather
                      │      │                  │                   ┌boxwood
                      │      │                  ├plant_material─wood┤
                      │      │                  │                   └log
                      │      │                  ├sealing_material─lute
                      │      │                  ├paper─card
                      │      │                  │       ┌spar─calcite─chalk
                      │      │                  ├mineral┤
                      │      │                  │       └emery
                      │      │         ┌material┤
                      │      │         │        ├sorbent─absorbent_material─sponge
                      │      │         │        ├adhesive_material─cement─putty
                      │      │         │        │                               ┌cotton
                      │      │         │        ├fiber─natural_fiber─plant_fiber┤
                      │      │         │        │                               └straw
                      │      │         │        ├earth─soil─sand
                      │      │         │        └conductor─copper
                      │      │         │                                 ┌iron
                      │      │         │                ┌metallic_element┤
                      │      │         │                │                └tin
                      │      └substance┼chemical_element┤
                      │                │                └carbon─charcoal
                      │                └food─nutriment─dish─terrine
      ┌physical_entity┤
      │               │                              ┌hand─fist
      │               │                              ├vertebrate_foot─foot
      │               │                    ┌extremity┤
      │               │                    │         ├end─tip─fingertip
      │               │                    │         └digit─finger
      │               │                    │      ┌flap─protective_fold─eyelid
      │               │                    ├tissue┤
      │               │                    │      └connective_tissue─bone─tooth
      │               │          ┌body_part┤
      │               │          │         │                 ┌ear
      │               │          │         │     ┌sense_organ┤
      │               │          │         │     │           └eye
      │               │          │         ├organ┤
      │               │          │         │     └speech_organ─articulator─tongue
      │               │          │         └joint─synovial_joint─hinge_joint─knee
      │               │          ├appendage─handle
      │               ├thing─part┤
      │               │          ├component─point
      │               │          └fragment─ember
      │               └process─phenomenon─energy─radiation─electromagnetic_radiation─actinic_radiation
entity┤
      │                                 ┌convex_shape─taper
      │                           ┌solid┼cast
      │                           │     └glass
      │                           ├round_shape─cone─funnel
      │                     ┌shape┤
      │                     │     │                   ┌polygon─triangle─wedge
      │                     │     ├figure─plane_figure┤
      │                     │     │                   └conic_section─ellipse─circle
      │                     │     └amorphous_shape─space─expanse
      │                     │        ┌physical_property─weight─bob─plumb_bob
      │           ┌attribute┼property┤
      │           │         │        └magnitude─extent─scope─palette
      │           │         └quality─appearance─blemish─dent
      │           │                                                 ┌creating_from_raw_materials─molding
      │           │                               ┌activity─creation┼representation─drawing─silverpoint
      │           │                               │                 └creating_by_removal─drilling
      │           │                               ├touch─hit─grounder─roller
      │           │                           ┌act┤
      │           │                           │   ├propulsion─pull─draw─tow
      │           │                           │   └speech_act─reply─rejoinder
      │           │                     ┌event┼happening─case
      │           │                     │     └social_event─show─performance
      │           ├psychological_feature┤
      │           │                     │                      ┌concept
      │           │                     └cognition─content─idea┤
      │           │                                            └generalization─principle─pillar
      └abstraction┤
                  │                           ┌token
                  │             ┌signal─symbol┤
                  │             │             └award─decoration─adornment─jewelry─jewel
                  ├communication┤
                  │             └indication─mark
                  │                                        ┌carton
                  │       ┌indefinite_quantity─containerful┤
                  │       │                                └thimble
                  │       │                                                          ┌british_capacity_unit─firkin
                  └measure┼definite_quantity─unit_of_measurement─volume_unit─dry_unit┤
                          │                                                          └united_states_dry_unit─bushel
                          └system_of_measurement─standard
```
