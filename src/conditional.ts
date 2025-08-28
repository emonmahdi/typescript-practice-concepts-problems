type TypeA = number;
type TypeB = string;

type TypeC = TypeB extends string ? string : null;

type TypeD = boolean;
type TypeE = TypeD extends string ? string : TypeB extends number ? number : null;