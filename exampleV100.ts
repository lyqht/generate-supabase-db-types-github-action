export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			UpdatedRecords: {
				Row: {
					id: number;
					created_at: string | null;
					repo: string;
					userId: string | null;
					initialRepoDetails: Json;
					updatedFields: Json;
				};
				Insert: {
					id?: number;
					created_at?: string | null;
					repo: string;
					userId?: string | null;
					initialRepoDetails: Json;
					updatedFields: Json;
				};
				Update: {
					id?: number;
					created_at?: string | null;
					repo?: string;
					userId?: string | null;
					initialRepoDetails?: Json;
					updatedFields?: Json;
				};
			};
			DeletedRecords: {
				Row: {
					id: number;
					created_at: string | null;
					repo: string;
					sourceRepo: string | null;
					isFork: boolean;
					userId: string;
					repoDetails: Json;
				};
				Insert: {
					id?: number;
					created_at?: string | null;
					repo: string;
					sourceRepo?: string | null;
					isFork?: boolean;
					userId: string;
					repoDetails: Json;
				};
				Update: {
					id?: number;
					created_at?: string | null;
					repo?: string;
					sourceRepo?: string | null;
					isFork?: boolean;
					userId?: string;
					repoDetails?: Json;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
