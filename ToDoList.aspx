<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ToDoList.aspx.cs" Inherits="ToDoList_Task___11.ToDoList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>To Do List Task - 11</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="Content/MyStyleSheet.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr class="tr_style">
                    <td>

                        <span class="style1">Task List
              </span>
                        <br />
                        <br />
                        <span class="style2">New Task
              </span>
                        <br />
                        <br />
                        <input id="textTask" type="text" /><br />
                        <hr class="hr_style" />
                        <br />
                        <button id="btnAddTask">ADD TASK</button>

                    </td>
                </tr>
                <tr>
                    <td>

                        <strong><span style="font-size: x-large">Tasks</span></strong>
                        <br />
                        <ul>
                        </ul>
                        <button id="btnClearTask">CLEAR TASK</button>
                    </td>
                </tr>
            </table>

        </div>
        <script src="Script/myscripts.js"></script>
    </form>
</body>
</html>
