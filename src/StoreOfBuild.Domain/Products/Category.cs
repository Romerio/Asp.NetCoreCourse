namespace StoreOfBuild.Domain.Products
{
    public class Category
    {
        public int Id { get; private set; }
        public string Name { get; private set; }

        public Category(string name)
        {
            ValidateValuesAndSetProperties(name);
        }

        public void Update(string name)
        {
            ValidateValuesAndSetProperties(name);
        }

        private void ValidateValuesAndSetProperties(string name)
        {
            DomainException.When(string.IsNullOrEmpty(name), "Name is required");

            Name = name;
        }

    }
}