using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ToDoList_Task___11
{
    public partial class ToDoList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        public static Task[] List()
        {
            StreamReader reader = new StreamReader(@"C:\Users\Megh.Godbole\source\repos\ToDoList Task_11\Script\task.json");
            string json = reader.ReadToEnd();
            Task[] ToDoTasks = JsonConvert.DeserializeObject<Task[]>(json);

            return ToDoTasks;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static Task[] Manage(string task)
        {
            StreamReader reader = new StreamReader(@"C:\Users\Megh.Godbole\source\repos\ToDoList Task_11\Script\task.json");
            string json = reader.ReadToEnd();
            Task[] ToDoTasks = JsonConvert.DeserializeObject<Task[]>(json);

            StreamWriter writer = new StreamWriter(@"C:\Users\Megh.Godbole\source\repos\ToDoList Task_11\Script\task.json");

            Task NewTask = new Task();
            NewTask.TaskID = ToDoTasks.Length+1;
            NewTask.TaskString = task;
            ToDoTasks[ToDoTasks.Length+1] = NewTask;
            writer.WriteLine(JsonConvert.SerializeObject(ToDoTasks));
            
            return ToDoTasks;
        }
        public class Task
        {
            public int TaskID { get; set; }
            public string TaskString { get; set; }
        }
    }
}