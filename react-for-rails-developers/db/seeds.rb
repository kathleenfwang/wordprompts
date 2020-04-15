# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
words = [ 'abate',
'chicanery',
'disseminate',
'gainsay',
'latent',
'aberrant',
'coagulate',
'dissolution',
'garrulous',
'laud',
'abeyance',
'coda',
'dissonance',
'goad',
'lethargic',
'abscond',
'cogent',
'distend',
'gouge',
'levee',
'abstemious',
'commensurate',
'distill',
'grandiloquent',
'levity',
'admonish',
'compendium',
'diverge',
'gregarious',
'log',
'adulterate',
'complaisant',
'divest',
'guileless',
'loquacious',
'aesthetic',
'compliant',
'document',
'gullible',
'lucid',
'aggregate',
'conciliatory',
'dogmatic',
'harangue',
'luminous',
'alacrity',
'condone',
'dormant',
'homogeneous',
'magnanimity',
'alleviate',
'confound',
'dupe',
'hyperbole',
'malingerer',
'amalgamate',
'connoisseur',
'ebullient',
'iconoclastic',
'malleable',
'ambiguous',
'contention',
'eclectic',
'idolatry',
'maverick',
'ambivalence',
'contentious',
'efficacy',
'immutable',
'mendacious',
'ameliorate',
'contrite',
'effrontery',
'impair',
'metamorphosis',
'anachronism',
'conundrum',
'elegy',
'impassive',
'meticulous',
'analogous',
'converge',
'elicit',
'impede',
'misanthrope',
'anarchy',
'convoluted',
'embellish',
'impermeable',
'mitigate',
'anomalous',
'craven',
'empirical',
'imperturbable',
'mollify',
'antipathy',
'daunt',
'emulate',
'impervious',
'morose'] 

words.each{|word| Word.create(word: word)}

(1..5).each do |n|
    n = User.create(username:'test' + n.to_s,password_digest:'test')
    x = Post.create(title: 'hello world', description: 'new post',user:n )
 
end 
 