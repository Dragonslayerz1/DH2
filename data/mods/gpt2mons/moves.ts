export const Moves: {[k: string]: ModdedMoveData} = {
  	"metalhydropump": {
		num: 7801,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "metalhydropump",
		isViable: true,
		name: "Metal Hydro Pump",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	"glaze": {
		num: 7802,
		accuracy: 75,
		basePower: 60,
		category: "Special",
		desc: "Has a 30% chance to freeze the target.",
		shortDesc: "30% chance to freeze.",
		id: "glaze",
		isViable: true,
		name: "Glaze",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	}
	"leveldive": {
		num: 7803,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		desc: "Deals damage equal to the user's level.",
		shortDesc: "Deals damage equal to the user's level.",
		id: "leveldive",
		isViable: true,
		name: "Level Dive",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	"morpecanswords": {
		num: 7804,
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		desc: "It's an Electric-type move with Dark-type effectiveness in it as well. It works identically to Flying Press.",
		shortDesc: "Combines Dark in its type effectiveness.",
		id: "morpecanswords",
		isViable: true,
		name: "Morpecan Swords",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Dark', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Electric",
		zMove: {basePower: 170},
		contestType: "Tough",
	}
	"superpowergem": {
		num: 7805,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "Lowers the user's Attack and Defense by 1.",
		shortDesc: "Lowers the user's Attack and Defense by 1.",
		id: "superpowergem",
		isViable: true,
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	"bignelly": {
		num: 7806,
		accuracy: 95,
		basePower: 180,
		category: "Physical",
		desc: "Lowers the user's Attack, Special Attack, and Speed by 1.",
		shortDesc: "Lowers the user's Attack, Sp. Atk, and Speed by 1.",
		id: "bignelly",
		isViable: true,
		name: "Big Nelly",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -1,
				spa: -1,
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {basePower: 220},
		contestType: "Cool",
	},
	"snipe": {
		num: 7807,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Always results in a critical hit, unless the foe has Shell Armor or other such abilities.",
		shortDesc: "Always results in a critical hit.",
		id: "snipe",
		isViable: true,
		name: "Snipe",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	"thwaczek": {
		num: 7808,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Super effective on Dragon and Electric.",
		shortDesc: "Super effective on Dragon and Electric.",
		id: "thwaczek",
		isViable: true,
		name: "Thwaczek",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Dragon') return 1;
			if (type === 'Electric') return 1;
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Beautiful",
	},
	"dragon2016": {
		num: 7809,
		accuracy: 80,
		basePower: 2016,
		category: "Special",
		desc: "Hits adjacent Pokemon. The user faints after using this move.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		id: "dragon2016",
		isViable: true,
		name: "Dragon 2016",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Dragon",
		contestType: "Beautiful",
	},
	"payoff": {
		num: 7810,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Heals the target by 50% of their max HP, then forces the target to switch to a random ally. It has a priority of 0.",
		shortDesc: "Heals the target then forces them to switch to a random ally.",
		id: "payoff",
		isViable: true,
		name: "Pay Off",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1, mystery: 1},
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('megalauncher')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.5));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && target.side !== source.side) {
				target.staleness = 'external';
			}
			return success;
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	"bigkick": {
		num: 7811,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "bigkick",
		isViable: true,
		name: "Big Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	}
	"honedge": {
		num: 7812,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and accuracy by two stages each.",
		shortDesc: "Raises the user's Attack and accuracy by 2.",
		id: "honedge",
		isViable: true,
		name: "Honedge",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 2,
			accuracy: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	"brightforce": {
		num: 7813,
		accuracy: 70,
		basePower: 140,
		category: "Physical",
		desc: "100% chance to lower the target's accuracy by 1.",
		shortDesc: "100% chance to lower the target's accuracy by 1.",
		id: "brightforce",
		isViable: true,
		name: "Bright Force",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	"electroshock": {
		num: 7814,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "Damages target based on Sp. Def, not Defense.",
		shortDesc: "Damages target based on Sp. Def, not Defense.",
		id: "electroshock",
		isViable: true,
		name: "Electro Shock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	"speedbomb": {
		num: 7815,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "This move has +1 priority. The user takes recoil equal to 33% the damage dealt.",
		shortDesc: "Usually goes first. Has 33% recoil.",
		id: "speedbomb",
		isViable: true,
		name: "Speed Bomb",
		pp: 15,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	}
	"gyarados": {
		num: 7816,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user's ability becomes Moxie. It will return to normal if the user switches out. The user's Attack and Speed are boosted by 1 stage each, even if the user's ability cannot be changed, or is already Moxie.",
		shortDesc: "The user's ability becomes Moxie, and their Atk and Speed are boosted by 1.",
		id: "gyarados",
		isViable: true,
		name: "Gyarados",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1, protect: 1, mirror: 1, mystery: 1},
		onTryHit(pokemon) {
			if (pokemon.getAbility().isPermanent || pokemon.ability === 'moxie' || pokemon.ability === 'truant') {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('moxie');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Moxie', '[from] move: Gyarados');
				return;
			}
			return false;
		},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	"softmide": {
		num: 7817,
		accuracy: 80,
		basePower: 90,
		category: "Physical",
		desc: "Traps and damages the foe for 4-5 turns. 50% chance to lower the foe's Speed by 1.",
		shortDesc: "Traps and damages the foe. 50% chance to lower the foe's Speed by 1.",
		id: "softmide",
		isViable: true,
		name: "Soft Mide",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: {
			chance: 50,
			boosts: {
				spe: -1,
			},
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	"suctionseed": {
		num: 7818,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		desc: "Traps and damages the foe for 1/8th of their total HP per turn for 4-5 turns, and heals the user for the amount of damage done. It's like Leech Seed with a partial trapping effect. When the trapping wears off, the damage stops as well. It doesn't affect Grass-types. Also, Binding Band and Grip Claw work with this move, extending the chip damage or duration.",
		shortDesc: "Traps and damages the foe for 4-5 turns, and heals the user for the amount of damage done.",
		id: "suctionseed",
		isViable: true,
		name: "Suction Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'suctionseed',
		condition: {
		duration: 5,
		durationCallback(target, source) {
			if (source?.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
			this.effectData.boundDivisor = source.hasItem('bindingband') ? 6 : 8;
	},

		onResidualOrder: 11,
		onResidual(pokemon) {
			const source = this.effectData.source;
			// G-Max Centiferno and G-Max Sandblast continue even after the user leaves the field
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectData.sourceEffect.id);
			if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns) && !gmaxEffect) {
				delete pokemon.volatiles['suctionseed'];
				this.add('-end', pokemon, this.effectData.sourceEffect, '[partiallytrapped]', '[silent]');
				return;
			}
			this.damage(pokemon.baseMaxhp / this.effectData.boundDivisor);
			if (damage) {
					this.heal(damage, target, pokemon);
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectData.sourceEffect, '[suctionseed]');
		},
		onTrapPokemon(pokemon) {
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectData.sourceEffect.id);
			if (this.effectData.source?.isActive || gmaxEffect) pokemon.tryTrap();
		},
		onTryImmunity(target) {
			return !target.hasType('Grass');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	"levelup": {
		num: 7819,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's level by 1.",
		shortDesc: "Raises the user's level by 1.",
		id: "levelup",
		isViable: true,
		name: "Level Up",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
				if (pokemon.level > 1) {
				pokemon.level = Math.max(1, pokemon.level + 1);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	"moonraking": {
		num: 7820,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets the user's HP to 1, and raises the user's Attack and Special Attack by 12 stages each. Fails if the user has 1 hitpoint remaining, but not if the user's Attack and Special Attack are already maxed out.",
		shortDesc: "Raises the user's Attack and Special attack by 12. Sets HP to 1.",
		id: "moonraking",
		isViable: true,
		name: "Moonraking",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp === 1 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.hp - 1);
			this.boost({atk: 12,
				spa: 12,}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	}
	"drainpulse": {
		num: 7821,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Heals for half the damage dealt. It is boosted by Mega Launcher.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "drainpulse",
		isViable: true,
		name: "Drain Pulse",
		pp: 10,
		priority: 0,
		flags: {pulse: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	"recycledammo": {
		num: 7822,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Restores 10 PP to a move on the same priority as Leppa berry. It will prioritize moves with 0 PP, and if multiple moves have 0 PP, it will restore the first one in the move list order. Otherwise, it restores 10 PP to any move that has lost PP, again prioritizing those earlier on the list.",
		shortDesc: "Restores 10 PP to first move with 0 PP, otherwise the first with PP missing.",
		id: "recycledammo",
		isViable: true,
		name: "Recycled Ammo",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
				pokemon.moveSlots.find(move => move.pp < move.maxpp);
			if (!moveSlot) return;
			moveSlot.pp += 10;
			if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
};
