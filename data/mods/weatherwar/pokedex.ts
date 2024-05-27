export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	groudon: {
		inherit: true,
		num: 1,
		species: "Groudon",
		types: ["Ground"],
		baseStats: {hp: 100, atk: 120, def: 120, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Sand Stream", H: "Solar Power"},
	},
	groudonprimal: {
		inherit: true,
		num: 2,
		species: "Groudon-Primal",
		types: ["Ground", "Fire"],
		baseStats: {hp: 100, atk: 150, def: 140, spa: 120, spd: 90, spe: 50},
		abilities: {0: "Solar Flare"},
	},
	kyogre: {
		inherit: true,
		num: 3,
		species: "Kyogre",
		types: ["Water"],
		baseStats: {hp: 100, atk: 70, def: 70, spa: 120, spd: 120, spe: 70},
		abilities: {0: "Monsoon", H: "Snow Cloak"},
	},
	kyogreprimal: {
		inherit: true,
		num: 4,
		species: "Kyogre-Primal",
		types: ["Water", "Ice"],
		baseStats: {hp: 100, atk: 120, def: 90, spa: 150, spd: 140, spe: 50},
		abilities: {0: "Snow Warning"},
	},
	rayquaza: {
		inherit: true,
		num: 5,
		species: "Rayquaza",
		types: ["Dragon"],
		baseStats: {hp: 95, atk: 105, def: 80, spa: 105, spd: 80, spe: 85},
		abilities: {0: "Zerg Rush", 1: "Draco Jet", H: "Air Lock"},
	},
	rayquazamega: {
		inherit: true,
		num: 6,
		species: "Rayquaza-Mega",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 95, atk: 125, def: 100, spa: 125, spd: 100, spe: 105},
		abilities: {0: "Delta Stream"},
	},
	castform: {
		inherit: true,
		num: 7,
		species: "Castform",
		types: ["Normal"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Forecast", H: "Weather Setter"},
	},
	bronzong: {
		inherit: true,
		num: 8,
		species: "Bronzong",
		types: ["Steel", "Psychic"],
		baseStats: {hp: 87, atk: 89, def: 116, spa: 89, spd: 116, spe: 33},
		abilities: {0: "Monsoon", H: "Time Machine"},
	},
	lugia: {
		inherit: true,
		num: 9,
		species: "Lugia",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 106, atk: 70, def: 90, spa: 90, spd: 114, spe: 80},
		abilities: {0: "Sheer Force", H: "Slipstream"},
	},
	zapdos: {
		inherit: true,
		num: 10,
		species: "Zapdos",
		types: ["Electric", "Flying"],
		baseStats: {hp: 90, atk: 60, def: 85, spa: 125, spd: 90, spe: 100},
		abilities: {0: "Squall", H: "Slipstream"},
	},
	articuno: {
		inherit: true,
		num: 11,
		species: "Articuno",
		types: ["Ice", "Flying"],
		baseStats: {hp: 90, atk: 55, def: 100, spa: 95, spd: 125, spe: 85},
		abilities: {0: "Snow Cloak", H: "Magic Guard"},
	},
	archaludon: {
		num: 12,
		species: "Archaludon",
		types: ["Steel", "Electric"],
		baseStats: {hp: 90, atk: 75, def: 110, spa: 125, spd: 65, spe: 85},
		abilities: {0: "Second Impact", H: "Short Circuit"},
	},
	dialga: {
		inherit: true,
		num: 13,
		species: "Dialga",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Time Machine", H: "Second Impact"},
	},
	dragonair: {
		inherit: true,
		num: 14,
		species: "Dragonair",
		types: ["Water"],
		baseStats: {hp: 91, atk: 70, def: 95, spa: 104, spd: 100, spe: 70},
		abilities: {0: "Climate Change"},
	},
	flygon: {
		inherit: true,
		num: 15,
		species: "Flygon",
		types: ["Dragon", "Ground"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100},
		abilities: {0: "Sand Stream", 1: "Draco Jet", H: "Levitate"},
	},
	torkoal: {
		inherit: true,
		num: 16,
		species: "Torkoal",
		types: ["Fire", "Poison"],
		baseStats: {hp: 70, atk: 85, def: 140, spa: 85, spd: 100, spe: 20},
		abilities: {0: "Solar Flare", 1: "Solar Power", H: "Corrosion"},
	},
	ninetales: {
		inherit: true,
		num: 17,
		species: "Ninetales",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 73, atk: 76, def: 75, spa: 106, spd: 100, spe: 100},
		abilities: {0: "Solar Flare", H: "Delusion"},
	},
	charizard: {
		inherit: true,
		num: 18,
		species: "Charizard",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 78, atk: 114, def: 78, spa: 95, spd: 85, spe: 80},
		abilities: {0: "Blaze", 1: "Solar Power", H: "Draco Jet"},
	},
	charizardmegay: {
		inherit: true,
		num: 19,
		species: "Charizard-Mega-Y",
		types: ["Fire", "Flying"],
		baseStats: {hp: 78, atk: 94, def: 88, spa: 145, spd: 115, spe: 110},
		abilities: {0: "Solar Flare"},
	},
	pelipper: {
		inherit: true,
		num: 20,
		species: "Pelipper",
		types: ["Water", "Flying"],
		baseStats: {hp: 80, atk: 60, def: 130, spa: 95, spd: 70, spe: 65},
		abilities: {0: "Delta Stream", 1: "Gluttony", H: "Monsoon"},
	},
	politoed: {
		inherit: true,
		num: 21,
		species: "Politoed",
		types: ["Water", "Normal"],
		baseStats: {hp: 90, atk: 75, def: 95, spa: 90, spd: 130, spe: 50},
		abilities: {0: "Monsoon", 1: "Duomod Reference??", H: "Finger Waggler"},
	},
	tyranitar: {
		inherit: true,
		num: 22,
		species: "Tyranitar",
		types: ["Rock", "Dark"],
		baseStats: {hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61},
		abilities: {0: "Blackout", 1: "Intimidate", H: "Sand Force"},
	},
	tyranitarmega: {
		inherit: true,
		num: 23,
		species: "Tyranitar-Mega",
		types: ["Rock", "Ground"],
		baseStats: {hp: 100, atk: 164, def: 150, spa: 95, spd: 120, spe: 71},
		abilities: {0: "Landslide"},
	},
	hippowdon: {
		inherit: true,
		num: 24,
		species: "Hippowdon",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47},
		abilities: {0: "Sand Stream", H: "Sand Force"},
	},
	abomasnow: {
		inherit: true,
		num: 25,
		species: "Abomasnow",
		types: ["Ice", "Grass"],
		baseStats: {hp: 90, atk: 52, def: 115, spa: 112, spd: 115, spe: 56},
		abilities: {0: "Ruin", H: "Ice Scales"},
	},
	abomasnowmega: {
		inherit: true,
		num: 26,
		species: "Abomasnow-Mega",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 90, atk: 52, def: 145, spa: 142, spd: 145, spe: 66},
		abilities: {0: "Snow Warning"},
	},
	ninetalesalola: {
		inherit: true,
		num: 27,
		species: "Ninetales-Alola",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 73, atk: 76, def: 75, spa: 106, spd: 100, spe: 100},
		abilities: {0: "Snow Warning", H: "Slush Rush"},
	},
	dragapult: {
		inherit: true,
		num: 28,
		species: "Dragapult",
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 88, atk: 100, def: 85, spa: 100, spd: 85, spe: 142},
		abilities: {0: "Zerg Rush", 1: "Infiltrator", H: "Clear Body"},
	},
	electrode: {
		inherit: true,
		num: 29,
		species: "Electrode",
		types: ["Electric", "Normal"],
		baseStats: {hp: 80, atk: 50, def: 70, spa: 100, spd: 80, spe: 150},
		abilities: {0: "Squall", 1: "Lightning Rod", H: "Aftermath"},
	},
	clefable: {
		inherit: true,
		num: 30,
		species: "Clefable",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 95, atk: 90, def: 90, spa: 105, spd: 90, spe: 60},
		abilities: {0: "Finger Waggler", 1: "Fable", H: "Unaware"},
	},
	blitzle: {
		inherit: true,
		num: 31,
		species: "Blitzle",
		types: ["Electric", "Fire"],
		baseStats: {hp: 105, atk: 60, def: 92, spa: 105, spd: 92, spe: 76},
		abilities: {0: "Lightning Rod", 1: "Solar Power", H: "Stamina"},
	},
	altaria: {
		inherit: true,
		num: 32,
		species: "Altaria",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 85, atk: 60, def: 100, spa: 100, spd: 105, spe: 80},
		abilities: {0: "Unaware", H: "Cloud Nine"},
	},
	altariamega: {
		inherit: true,
		num: 33,
		species: "Altaria-Mega",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 85, atk: 110, def: 120, spa: 110, spd: 120, spe: 85},
		abilities: {0: "Fable"},
	},
	lickilicky: {
		inherit: true,
		num: 34,
		species: "Lickilicky",
		types: ["Normal"],
		baseStats: {hp: 120, atk: 85, def: 95, spa: 85, spd: 95, spe: 50},
		abilities: {0: "Finger Waggler", 1: "Thick Fat", H: "Cloud Nine"},
	},
	golduck: {
		inherit: true,
		num: 35,
		species: "Golduck",
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 72, def: 78, spa: 115, spd: 80, spe: 105},
		abilities: {0: "Domain Expander", 1: "Duomod Reference??", H: "Cloud Nine"},
	},
	drampa: {
		inherit: true,
		num: 36,
		species: "Drampa",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 108, atk: 60, def: 85, spa: 135, spd: 91, spe: 51},
		abilities: {0: "Zerg Rush", 1: "Berserk", H: "Cloud Nine"},
	},
	venusaur: {
		inherit: true,
		num: 37,
		species: "Venusaur",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 82, def: 83, spa: 105, spd: 100, spe: 80},
		abilities: {0: "Overgrow", H: "Chlorophyll"},
	},
	venusaurmega: {
		inherit: true,
		num: 38,
		species: "Venusaur-Mega",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 100, def: 123, spa: 127, spd: 120, spe: 80},
		abilities: {0: "Ruin"},
	},
	sawsbuckspring: {
		num: 39,
		species: "Sawsbuck-Spring",
		baseSpecies: "Sawsbuck",
		forme: "Spring",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 120, def: 70, spa: 60, spd: 70, spe: 115},
		abilities: {0: "Serene Grace", 1: "Solar Power", H: "Chlorophyll"},
	},
	beedrill: {
		inherit: true,
		num: 40,
		species: "Beedrill",
		types: ["Bug", "Poison"],
		baseStats: {hp: 85, atk: 110, def: 55, spa: 40, spd: 85, spe: 125},
		abilities: {0: "Swarm", H: "Shart"},
	},
	beedrillmega: {
		inherit: true,
		num: 41,
		species: "Beedrill-Mega",
		types: ["Bug", "Poison"],
		baseStats: {hp: 85, atk: 130, def: 100, spa: 40, spd: 100, spe: 145},
		abilities: {0: "Corrosion"},
	},
	scizor: {
		inherit: true,
		num: 42,
		species: "Scizor",
		types: ["Bug", "Steel"],
		baseStats: {hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65},
		abilities: {0: "Swarm", H: "Second Impact"},
	},
	scizormega: {
		inherit: true,
		num: 43,
		species: "Scizor-Mega",
		types: ["Bug", "Steel"],
		baseStats: {hp: 70, atk: 150, def: 140, spa: 95, spd: 100, spe: 45},
		abilities: {0: "Technician"},
	},
	kleavor: {
		inherit: true,
		num: 44,
		species: "Kleavor",
		types: ["Bug", "Rock"],
		baseStats: {hp: 70, atk: 135, def: 85, spa: 45, spd: 70, spe: 95},
		abilities: {0: "Swarm", H: "Landslide"},
	},
	heracross: {
		inherit: true,
		num: 45,
		species: "Heracross",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85},
		abilities: {0: "Swarm", H: "Beatdown"},
	},
	heracrossmega: {
		inherit: true,
		num: 46,
		species: "Heracross-Mega",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80, atk: 185, def: 115, spa: 40, spd: 105, spe: 75},
		abilities: {0: "Beatdown"},
	},
	vespiquen: {
		inherit: true,
		num: 47,
		species: "Vespiquen",
		types: ["Bug", "Flying"],
		baseStats: {hp: 106, atk: 90, def: 102, spa: 90, spd: 102, spe: 40},
		abilities: {0: "Swarm", H: "Hivemind"},
	},
	volbeat: {
		inherit: true,
		num: 48,
		species: "Volbeat",
		types: ["Bug", "Electric"],
		baseStats: {hp: 95, atk: 47, def: 85, spa: 103, spd: 95, spe: 105},
		abilities: {0: "Swarm", 1: "Duomod Reference??", H: "Weather Setter"},
	},
	kingdra: {
		inherit: true,
		num: 49,
		species: "Kingdra",
		types: ["Water", "Dragon"],
		baseStats: {hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85},
		abilities: {0: "Draco Jet", H: "Sniper"},
	},
	excadrill: {
		inherit: true,
		num: 50,
		species: "Excadrill",
		types: ["Ground", "Steel"],
		baseStats: {hp: 110, atk: 135, def: 60, spa: 50, spd: 87, spe: 88},
		abilities: {0: "Sand Rush", 1: "Sand Force", H: "Mold Breaker"},
	},
	tornadustherian: {
		inherit: true,
		num: 51,
		species: "Tornadus-Therian",
		types: ["Flying"],
		baseStats: {hp: 79, atk: 100, def: 70, spa: 100, spd: 80, spe: 121},
		abilities: {0: "Slipstream", H: "Duomod Reference??"},
	},
	thundurustherian: {
		inherit: true,
		num: 52,
		species: "Thundurus-Therian",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 79, atk: 115, def: 70, spa: 115, spd: 70, spe: 101},
		abilities: {0: "Beatdown", H: "Short Circuit"},
	},
	tentacruel: {
		inherit: true,
		num: 53,
		species: "Tentacruel",
		types: ["Water", "Poison"],
		baseStats: {hp: 80, atk: 70, def: 75, spa: 95, spd: 120, spe: 90},
		abilities: {0: "Corrosion", 1: "Wet Skin", H: "Liquid Ooze"},
	},
	toedscruel: {
		inherit: true,
		num: 54,
		species: "Toedscruel",
		types: ["Ground", "Grass"],
		baseStats: {hp: 80, atk: 95, def: 120, spa: 70, spd: 75, spe: 90},
		abilities: {0: "Ruin", H: "Mycellium Might"},
	},
	toxicroak: {
		inherit: true,
		num: 55,
		species: "Toxicroak",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 83, atk: 116, def: 85, spa: 66, spd: 85, spe: 95},
		abilities: {0: "Shart", 1: "Wet Skin", H: "Beatdown"},
	},
	spiritomb: {
		inherit: true,
		num: 56,
		species: "Spiritomb",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 73, atk: 108, def: 108, spa: 108, spd: 108, spe: 25},
		abilities: {0: "Delusion", 1: "Intangible", H: "Blackout"},
	},
	cherrim: {
		inherit: true,
		num: 57,
		species: "Cherrim",
		types: ["Grass"],
		baseStats: {hp: 80, atk: 60, def: 120, spa: 97, spd: 88, spe: 85},
		abilities: {0: "Chlorophyll", H: "Flower Gift"},
	},
	cherrimsunshine: {
		inherit: true,
		num: 58,
		species: "Cherrim-Sunshine",
		types: ["Grass", "Fire"],
		baseStats: {hp: 80, atk: 60, def: 80, spa: 117, spd: 88, spe: 105},
		abilities: {0: "Flower Gift"},
	},
	garganacl: {
		inherit: true,
		num: 59,
		species: "Garganacl",
		types: ["Rock"],
		baseStats: {hp: 100, atk: 100, def: 130, spa: 45, spd: 90, spe: 35},
		abilities: {0: "Landslide", H: "Sand Force"},
	},
	incineroar: {
		inherit: true,
		num: 60,
		species: "Incineroar",
		types: ["Fire", "Fighting"],
		baseStats: {hp: 95, atk: 115, def: 100, spa: 70, spd: 90, spe: 60},
		abilities: {0: "Blaze", 1: "Beatdown", H: "Suplex"},
	},
	hawlucha: {
		inherit: true,
		num: 61,
		species: "Hawlucha",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 88, atk: 92, def: 95, spa: 74, spd: 63, spe: 118},
		abilities: {0: "Suplex", 1: "Slipstream", H: "Reckless"},
	},
	hitmonchan: {
		inherit: true,
		num: 62,
		species: "Hitmonchan",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 80, atk: 115, def: 79, spa: 35, spd: 110, spe: 106},
		abilities: {0: "Beatdown", 1: "Duomod Reference??", H: "Technician"},
	},
	skeledirge: {
		inherit: true,
		num: 63,
		species: "Skeledirge",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 54, atk: 65, def: 150, spa: 80, spd: 115, spe: 66},
		abilities: {0: "Blaze", 1: "Solar Power", H: "Banshee"},
	},
	mismagius: {
		inherit: true,
		num: 64,
		species: "Mismagius",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 65, atk: 65, def: 65, spa: 115, spd: 115, spe: 115},
		abilities: {0: "Banshee", H: "Dark Fantasy"},
	},
	darkrai: {
		inherit: true,
		num: 65,
		species: "Darkrai",
		types: ["Dark"],
		baseStats: {hp: 70, atk: 70, def: 70, spa: 125, spd: 70, spe: 125},
		abilities: {0: "Blackout", 1: "Intangible", H: "Bad Dreams"},
	},
	wochien: {
		inherit: true,
		num: 66,
		species: "Wo-Chien",
		types: ["Dark", "Grass"],
		baseStats: {hp: 85, atk: 75, def: 90, spa: 85, spd: 125, spe: 70},
		abilities: {0: "Ruin"},
	},
	absol: {
		inherit: true,
		num: 67,
		species: "Absol",
		types: ["Dark"],
		baseStats: {hp: 80, atk: 130, def: 75, spa: 95, spd: 75, spe: 75},
		abilities: {0: "Blackout", 1: "Fable", H: "Adaptability"},
	},
	absolmega: {
		inherit: true,
		num: 68,
		species: "Absol-Mega",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 80, atk: 150, def: 75, spa: 135, spd: 75, spe: 115},
		abilities: {0: "Dark Fantasy"},
	},
	malamar: {
		inherit: true,
		num: 69,
		species: "Malamar",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 86, atk: 110, def: 88, spa: 78, spd: 95, spe: 73},
		abilities: {0: "Freaky", H: "Contrary"},
	},
	jirachi: {
		inherit: true,
		num: 70,
		species: "Jirachi",
		types: ["Steel", "Psychic"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Time Machine", 1: "Duomod Reference??", H: "Freaky"},
	},
	celebi: {
		inherit: true,
		num: 71,
		species: "Celebi",
		types: ["Steel", "Grass"],
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Time Machine", H: "Ruin"},
	},
	tapulele: {
		inherit: true,
		num: 72,
		species: "Tapu Lele",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 70, atk: 85, def: 75, spa: 115, spd: 110, spe: 95},
		abilities: {0: "Freaky", H: "Fable"},
	},
	manaphy: {
		inherit: true,
		num: 73,
		species: "Manaphy",
		types: ["Water", "Fairy"],
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
		abilities: {0: "Domain Expander", 1: "Wet Skin", H: "Natural Cure"},
	},
	alakazam: {
		inherit: true,
		num: 74,
		species: "Alakazam",
		types: ["Psychic"],
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120},
		abilities: {0: "Freaky", 1: "Duomod Reference??", H: "Trace"},
	},
	alakazammega: {
		inherit: true,
		num: 75,
		species: "Alakazam-Mega",
		types: ["Psychic"],
		baseStats: {hp: 55, atk: 50, def: 65, spa: 175, spd: 105, spe: 150},
		abilities: {0: "Domain Expander"},
	},
	kabutops: {
		inherit: true,
		num: 76,
		species: "Kabutops",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 90, atk: 115, def: 115, spa: 65, spd: 65, spe: 80},
		abilities: {0: "Sand Rush", 1: "Mold Breaker", H: "Sharpness"},
	},
	nihilego: {
		inherit: true,
		num: 77,
		species: "Nihilego",
		types: ["Rock", "Poison"],
		baseStats: {hp: 109, atk: 53, def: 71, spa: 103, spd: 113, spe: 101},
		abilities: {0: "Corrosion", H: "Levitate"},
	},
	diancie: {
		inherit: true,
		num: 78,
		species: "Diancie",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 50, atk: 100, def: 150, spa: 100, spd: 100, spe: 50},
		abilities: {0: "Landslide", 1: "Duomod Reference??", H: "Fable"},
	},
	dianciemega: {
		inherit: true,
		num: 79,
		species: "Diancie-Mega",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 50, atk: 130, def: 130, spa: 130, spd: 130, spe: 80},
		abilities: {0: "Sand Rush"},
	},
	arctozolt: {
		inherit: true,
		num: 80,
		species: "Arctozolt",
		types: ["Electric", "Ice"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 100, spd: 90, spe: 55},
		abilities: {0: "Snow Cloak", H: "Short Circuit"},
	},
	mamoswine: {
		inherit: true,
		num: 81,
		species: "Mamoswine",
		types: ["Ice", "Ground"],
		baseStats: {hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80},
		abilities: {0: "Snow Cloak", 1: "Mold Breaker", H: "Sand Force"},
	},
	froslass: {
		inherit: true,
		num: 82,
		species: "Froslass",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 80, atk: 80, def: 80, spa: 100, spd: 80, spe: 110},
		abilities: {0: "Snow Warning", H: "Snow Cloak"},
	},
	frosmoth: {
		inherit: true,
		num: 83,
		species: "Frosmoth",
		types: ["Ice", "Bug"],
		baseStats: {hp: 70, atk: 80, def: 60, spa: 125, spd: 90, spe: 75},
		abilities: {0: "Swarm", 1: "Hivemind", H: "Snow Cloak"},
	},
	chienpao: {
		inherit: true,
		num: 84,
		species: "Chien-Pao",
		types: ["Dark", "Ice"],
		baseStats: {hp: 80, atk: 110, def: 80, spa: 70, spd: 65, spe: 125},
		abilities: {0: "Snow Warning"},
	},
	tinglu: {
		inherit: true,
		num: 85,
		species: "Ting-Lu",
		types: ["Dark", "Ground"],
		baseStats: {hp: 155, atk: 90, def: 105, spa: 55, spd: 80, spe: 45},
		abilities: {0: "Dust Storm"},
	},
	armaldo: {
		inherit: true,
		num: 86,
		species: "Armaldo",
		types: ["Bug", "Ground"],
		baseStats: {hp: 95, atk: 105, def: 120, spa: 70, spd: 80, spe: 45},
		abilities: {0: "Swarm", 1: "Mold Breaker", H: "Hivemind"},
	},
	golemalola: {
		inherit: true,
		num: 87,
		species: "Golem-Alola",
		types: ["Rock", "Electric"],
		baseStats: {hp: 80, atk: 45, def: 130, spa: 130, spd: 65, spe: 75},
		abilities: {0: "Sand Rush", 1: "Magnet Pull", H: "Duomod Reference??"},
	},
	salazzle: {
		inherit: true,
		num: 88,
		species: "Salazzle",
		types: ["Fire", "Poison"],
		baseStats: {hp: 88, atk: 111, def: 70, spa: 64, spd: 70, spe: 127},
		abilities: {0: "Corrosion", H: "Mold Breaker"},
	},
	weezinggalar: {
		inherit: true,
		num: 89,
		species: "Weezing-Galar",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 85, atk: 90, def: 120, spa: 85, spd: 80, spe: 60},
		abilities: {0: "Solar Flare", 1: "Levitate", H: "Neutralizing Gas"},
	},
	sableye: {
		inherit: true,
		num: 90,
		species: "Sableye",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 50},
		abilities: {0: "Delusion", 1: "Landslide", H: "Prankster"},
	},
	sableyemega: {
		inherit: true,
		num: 91,
		species: "Sableye-Mega",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 85, atk: 100, def: 135, spa: 100, spd: 135, spe: 20},
		abilities: {0: "Magic Bounce"},
	},
	pecharunt: {
		num: 92,
		species: "Pecharunt",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 88, atk: 88, def: 88, spa: 88, spd: 88, spe: 88},
		abilities: {0: "Poison Puppeteer", 1: "Banshee", H: "Merciless"},
	},
	wyrdeer: {
		inherit: true,
		num: 93,
		species: "Wyrdeer",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 103, atk: 75, def: 82, spa: 105, spd: 105, spe: 65},
		abilities: {0: "Intimidate", 1: "Domain Expander", H: "Unaware"},
	},
	lilywhite: {
		num: 94,
		species: "Lily White",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 85, atk: 35, def: 55, spa: 120, spd: 85, spe: 90},
		abilities: {0: "Its Spring"},
	},

	//duomod reference
	impsaustor: {
		num: 999.5,
		species: "Impsaustor",
		types: ["Dark", "Poison"],
		gender: "N",
		baseStats: {hp: 100, atk: 120, def: 80, spa: 80, spd: 120, spe: 100}, // i'm so freaking tired i did this to be funny lmao
		abilities: {0: "Vent"},
		heightm: 1,
		weightkg: 5,
		eggGroups: ["Undiscovered"],
	},
}