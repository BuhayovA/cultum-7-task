export interface Weather {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities?: (AbilitiesEntity)[] | null;
  forms?: (AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies)[] | null;
  game_indices?: (GameIndicesEntity)[] | null;
  held_items?: (HeldItemsEntity)[] | null;
  location_area_encounters: string;
  moves?: (MovesEntity)[] | null;
  species: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats?: (StatsEntity)[] | null;
  types?: (TypesEntity)[] | null;
}
export interface AbilitiesEntity {
  is_hidden: boolean;
  slot: number;
  ability: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
export interface AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
export interface HeldItemsEntity {
  item: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
  version_details?: (VersionDetailsEntity)[] | null;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: (VersionGroupDetailsEntity)[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  version_group: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
  move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
export interface Sprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: Other;
  versions: Versions;
}
export interface Other {
  dream_world: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  official-artwork: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon {
}
export interface Versions {
  generation-i: Generation-i;
  generation-ii: Generation-ii;
  generation-iii: Generation-iii;
  generation-iv: Generation-iv;
  generation-v: Generation-v;
  generation-vi: Generation-vi;
  generation-vii: Generation-vii;
  generation-viii: Generation-viii;
}
export interface Generation-i {
  red-blue: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  yellow: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-ii {
  crystal: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  gold: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  silver: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-iii {
  emerald: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  firered-leafgreen: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  ruby-sapphire: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-iv {
  diamond-pearl: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  heartgold-soulsilver: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  platinum: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-v {
  black-white: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-vi {
  omegaruby-alphasapphire: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  x-y: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-vii {
  icons: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
  ultra-sun-ultra-moon: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface Generation-viii {
  icons: DreamWorldOrOfficial-artworkOrRed-blueOrYellowOrCrystalOrGoldOrSilverOrEmeraldOrFirered-leafgreenOrRuby-sapphireOrDiamond-pearlOrHeartgold-soulsilverOrPlatinumOrBlack-whiteOrOmegaruby-alphasapphireOrX-yOrIconsOrUltra-sun-ultra-moon;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrItemOrVersionGroupOrMoveLearnMethodOrMoveOrStatOrTypeOrSpecies;
}
