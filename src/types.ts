export type Source = 'weekly' | 'recurring' | 'temporary';
export type GoalStatus = 'not_started' | 'in_progress' | 'completed' | 'partial' | 'failed' | 'abandoned';
export type TaskKind = 'one_time' | 'count' | 'duration';

export interface BaseRecord { id: string; createdAt: string; updatedAt: string; }
export interface WeeklyTask extends BaseRecord { name: string; originalName: string; week: string; kind: TaskKind; targetCount?: number; targetMinutes?: number; categoryId?: string; priority: 'low'|'medium'|'high'; notes: string; status: 'active'|'archived'|'abandoned'; order: number; }
export interface RecurringTask extends BaseRecord { name: string; originalName: string; repeat: 'daily'|'weekdays'|'custom'; weekdays: number[]; startDate: string; endDate?: string; active: boolean; categoryId?: string; notes: string; skippedDates: string[]; }
export interface TemporaryTask extends BaseRecord { name: string; originalName: string; date: string; notes: string; keepHistory: boolean; completed: boolean; }
export interface CompletionRecord extends BaseRecord { taskId: string; source: Source; originalTaskName: string; date: string; completedAt: string; durationMinutes: number; notes: string; status: 'completed'|'skipped'; }
export interface TimeEntry extends BaseRecord { taskId: string; source: Source; startedAt: string; endedAt?: string; durationSeconds: number; status: 'running'|'paused'|'finished'; }
export interface MonthlyGoal extends BaseRecord { month: string; name: string; description: string; categoryId?: string; targetValue?: number; unit?: string; currentValue?: number; status: GoalStatus; notes: string; plan: string; midMonth: string; endMonth: string; }
export interface MonthlyReview extends BaseRecord { month: string; goodThings: string; unfinished: string; problems: string; unrealistic: string; improvements: string; biggestLearning: string; custom: string; rating: number; nextMonthPlan: string; }
export interface DailyLifeLog extends BaseRecord { type: 'toilet'|'shower'; date: string; }
export interface Category extends BaseRecord { name: string; color: string; }
export interface Settings { theme: 'light'|'dark'|'system'; weekStartsOn: 0|1; }
export interface AppData { monthlyGoals: MonthlyGoal[]; monthlyReviews: MonthlyReview[]; weeklyTasks: WeeklyTask[]; recurringTasks: RecurringTask[]; temporaryTasks: TemporaryTask[]; completionRecords: CompletionRecord[]; timeEntries: TimeEntry[]; categories: Category[]; dailyLifeLogs: DailyLifeLog[]; settings: Settings; }
