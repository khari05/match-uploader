import { type TbaFrcTeam } from "@src/models/theBlueAlliance/tbaFrcTeam";

export interface TbaAlliance {
    dq_team_keys: TbaFrcTeam[];
    score: number;
    surrogate_team_keys: TbaFrcTeam[];
    team_keys: TbaFrcTeam[];
}
