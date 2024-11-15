class FoodService {
  private static handleError(error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'Une erreur est survenue' };
  }

  static async getFoods() {
    try {
      const response = await fetch('/api/foods');
      if (!response.ok) {
        throw new Error('Failed to fetch foods');
      }
      return await response.json();
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  static async getFood(name: string) {
    try {
      const response = await fetch(`/api/foods/${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch food');
      }
      return await response.json();
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }
}

export default FoodService;
