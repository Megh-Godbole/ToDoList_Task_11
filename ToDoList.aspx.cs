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
        public static List<Task> List()
        {
            var todolist = new ToDoList();
            StreamReader reader = new StreamReader(todolist.Path());
            string json = reader.ReadToEnd();
            List<Task> ToDoTasks = JsonConvert.DeserializeObject<List<Task>>(json);
            reader.Close();

            return ToDoTasks;
        }

        [WebMethod]
        public static void Add(string task)
        {
            var todolist = new ToDoList();
            StreamReader reader = new StreamReader(todolist.Path());
            string json = reader.ReadToEnd();
            List<Task> ToDoTasks = JsonConvert.DeserializeObject<List<Task>>(json);

            Task NewTask = new Task();
            if (ToDoTasks.Count == 0)
            {
                NewTask.TaskID = 1;
            }
            else
            {
                NewTask.TaskID = ToDoTasks[ToDoTasks.Count - 1].TaskID + 1;
            }
            NewTask.TaskString = task;
            ToDoTasks.Add(NewTask);
            reader.Close();

            StreamWriter writer = new StreamWriter(todolist.Path());
            writer.WriteLine(JsonConvert.SerializeObject(ToDoTasks));
            writer.Close();
        }
        [WebMethod]
        public static void Delete(string task)
        {
            var todolist = new ToDoList();
            StreamReader reader = new StreamReader(todolist.Path());
            string json = reader.ReadToEnd();
            List<Task> ToDoTasks = JsonConvert.DeserializeObject<List<Task>>(json);
            foreach (var item in ToDoTasks)
            {
                if (item.TaskString == task)
                {
                    ToDoTasks.Remove(item);
                    break;
                }
            }
            reader.Close();

            StreamWriter writer = new StreamWriter(todolist.Path());
            writer.WriteLine(JsonConvert.SerializeObject(ToDoTasks));
            writer.Close();
        }
        [WebMethod]
        public static void Update(string taskNew,string taskOld)
        {
            var todolist = new ToDoList();
            StreamReader reader = new StreamReader(todolist.Path());
            string json = reader.ReadToEnd();
            List<Task> ToDoTasks = JsonConvert.DeserializeObject<List<Task>>(json);
            foreach (var item in ToDoTasks)
            {
                if (item.TaskString == taskOld)
                {
                    item.TaskString = taskNew;
                    break;
                }
            }
            reader.Close();

            StreamWriter writer = new StreamWriter(todolist.Path());
            writer.WriteLine(JsonConvert.SerializeObject(ToDoTasks));
            writer.Close();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        public static void DeleteAll()
        {
            var todolist = new ToDoList();
            StreamReader reader = new StreamReader(todolist.Path());
            string json = reader.ReadToEnd();
            List<Task> ToDoTasks = JsonConvert.DeserializeObject<List<Task>>(json);
            ToDoTasks.Clear();
            reader.Close();

            StreamWriter writer = new StreamWriter(todolist.Path());
            writer.WriteLine(JsonConvert.SerializeObject(ToDoTasks));
            writer.Close();
        }
        public string Path()
        {
            string jsonPath = Server.MapPath("/Script/task.json");
            return jsonPath;
        }
    }
}