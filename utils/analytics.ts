export interface PageView {
  path: string;
  timestamp: number;
}

class Analytics {
  private storageKey = 'portfolio_analytics';

  private getStoredData(): PageView[] {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private storeData(data: PageView[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  trackPageView(path: string): void {
    const views = this.getStoredData();
    views.push({
      path,
      timestamp: Date.now()
    });
    this.storeData(views);
  }

  getPageViews(path?: string): number {
    const views = this.getStoredData();
    if (path) {
      return views.filter(view => view.path === path).length;
    }
    return views.length;
  }

  getMostViewedPages(limit: number = 5): { path: string; views: number }[] {
    const views = this.getStoredData();
    const pageCounts = views.reduce<Record<string, number>>((acc, view) => {
      acc[view.path] = (acc[view.path] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(pageCounts)
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }
}

export const analytics = new Analytics();
