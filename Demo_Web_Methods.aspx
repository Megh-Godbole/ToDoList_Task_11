<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demo_Web_Methods.aspx.cs" Inherits="ToDoList_Task___11.Demo_Web_Methods" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Script/Demo.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <%-- <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true"></asp:ScriptManager> --%>
        <div>
            Name : 
            <asp:TextBox ID="tbName" runat="server"></asp:TextBox>
            <input type="button" value="Submit" id="btnSubmit" /><br />
            <asp:Label ID="lblOutput" runat="server"  Text=""></asp:Label>
        </div>
    </form>
</body>
</html>
