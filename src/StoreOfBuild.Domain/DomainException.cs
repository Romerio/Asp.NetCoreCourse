
using System;

namespace StoreOfBuild.Domain
{
    public class DomainException : Exception
    {
        public DomainException(string error) : base(error)
        {

        }

        public static void When(bool isInvalid, string error)
        {
            if(!isInvalid)
            {
                throw new DomainException(error);  
            }
        }
    }
}