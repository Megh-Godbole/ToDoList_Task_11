using System;
using System.Web.Services;
using System.IO;
using System.Collections.Generic;
using System.Data.SqlClient;
using Newtonsoft.Json;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Script.Services;

namespace ToDoList_Task___11
{
    public partial class Demo_Web_Methods : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod] 
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,UseHttpGet =true)]
        public static string GetTasks()
        {
            StreamReader reader = new StreamReader(@"C:\Users\Megh.Godbole\source\repos\ToDoList Task_11\Script\task.json");
            string json = reader.ReadToEnd();

            List<Task> ToDoTasks = new List<Task>();
            Task[] Tasks = JsonConvert.DeserializeObject<Task[]>(json);

            //foreach (var task in Tasks.ToDoTask)
            //{
            //     ListOfTask += task;

            //}
            //string json = @"{'Name': 'Bad Boys','ReleaseDate': '1995-4-7T00:00:00','Genres': ['Action','Comedy']}";

            //Movie m = JsonConvert.DeserializeObject<Movie>(json);

            //string name = m.Name;
            // Bad Boy

            //Product product = new Product();
            //product.Name = "Apple";
            //product.Expiry = new DateTime(2008, 12, 28);
            //product.Sizes = new string[] { "Small" };

            //string str = JsonConvert.SerializeObject(json);



            return json;
        }
        public class Task
        {
            public int TaskID { get; set; }
            public string TaskString { get; set; }
        }
    }
}