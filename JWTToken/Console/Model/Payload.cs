using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ConsoleJWT.Model
{
    public class Payload
    {
        [Description("Origem")]
        public string Iss { get; set; }

        [Description("Data de criação")]
        public string Iat { get; set; }

        [Description("Data de expiração")]
        public string Exp { get; set; }

        [Description("Roles/Perfil")]
        public string Acl { get; set; }

        [Description("Nome do usuário")]
        public string Name { get; set; }

        [Description("Email do usuário")]
        public string Email { get; set; }
    }
}
