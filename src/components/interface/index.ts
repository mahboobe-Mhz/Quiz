export interface FormDataType{
    number: number;
    Category: SelectCategory;   
    Difficulty:SelectDifficulty
}
enum SelectCategory {
    Category = 'Category',
    public = 'public Information',
    literature = 'literature',
    country = 'country',
  }
  enum SelectDifficulty{
    Difficulty = 'Difficulty',
    medium = ' medium',
    hard = 'hard',

  }
 