export interface SentimentTrend {
  month: string;
  avgRating: number;
  reviewCount: number;
}

export interface AspectAnalysis {
  description: string;
  aspect: string;
  avgRating: number;
  mentionCount: number;
}

export interface NegativeInsight {
  phrase: string;
  frequency: number;
  rating: number;
  percentage: number;
  severity: string;
}

export interface KeyPhrase {
  text: string;
  sentiment: number;
  occurrences: number;
};

export interface PositiveInsight {
  category: string;
  rating: number;
  frequency: number;
  percentage: number;
  description: string;
}

export interface TextAnalysis {
  emojiStats: Array<{
    emoji: string;
    count: number;
    avgRating: number;
  }>;
  punctuationStats: {
    questionMarks: number;
    questionAvgRating: number;
    exclamationMarks: number;
    exclamationAvgRating: number;
  };
  capsAnalysis: Array<{
    stars: number;
    capsPercentage: number;
  }>;
  keyPhrases: Array<{
    text: string;
    occurrences: number;
    sentiment: number;
  }>;
}

export interface Analytics {
  totalReviews: number;
  averageRating: number;
  sentimentScore: number;
  competitorComparison: number;
  aspectAnalysis: AspectAnalysis[];
  negativeInsights: NegativeInsight[];
  positiveInsights: PositiveInsight[];
  textAnalysis: TextAnalysis;
  sentimentTrends: SentimentTrend[];
}