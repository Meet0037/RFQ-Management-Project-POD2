﻿using System.ComponentModel.DataAnnotations;


namespace RFQMicroservice.Models
{
    public class Supplier
    {
        [Key]
        public int Part_id { get; set; }
        public int Supplier_id { get; set; }
        public string Supplier_Name { get; set; }
        public string Location { get; set; }
        public int Feedback { get; set; }

        public Supplier()
        {
            var rfq = new HashSet<Rfq>();
        }


    }
}
