using ConsoleJWT.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace ConsoleJWT
{
    class Program
    {
        static void Main(string[] args)
        {

            #region [HEADER]
            #region [dados do header]
            var header_alg = new Dictionary<string, string>();
            header_alg.Add("type", "JWT");
            header_alg.Add("alg", "HS256");
            var header_json = JsonConvert.SerializeObject(header_alg);
            Console.WriteLine(header_json);
            #endregion

            #region [Passando para base64]
            byte[] bytes = Encoding.UTF8.GetBytes(header_json);
            var header = Convert.ToBase64String(bytes);
            //Console.WriteLine(header);
            #endregion

            #endregion

            #region [Payload]
            #region [dados do Payload]
            var payload_dados = new Payload
            {
                Iss = "https://www.meetup.com/pt-BR/dotnet-Sao-Paulo/?_locale=pt-BR",
                Iat = DateTime.Now.ToLongDateString(),
                Exp = DateTime.Now.AddHours(3).ToLongDateString(),
                Acl = "Participante",
                Name = "Thiago da Silva Adriano",
                Email = "tadriano.net@gmail.com"

            };

            var payload_json = JsonConvert.SerializeObject(payload_dados);
            #endregion

            #region [Passando para base64]
            byte[] bytes_payload = Encoding.UTF8.GetBytes(payload_json);
            var payload = Convert.ToBase64String(bytes_payload);
            //  Console.WriteLine(payload);
            #endregion

            #endregion
            
            #region [Signature]
            string key = ".net-sp-ness";
            Console.WriteLine(header + "." + payload + "." + sha256(header + "." + payload + key));



            #endregion

            Console.ReadLine();
        }

        #region [Sha256]
        static string sha256(string randomString)
        {
            var crypt = new SHA256Managed();
            string hash = String.Empty;
            byte[] crypto = crypt.ComputeHash(Encoding.ASCII.GetBytes(randomString));
            foreach (byte theByte in crypto)
            {
                hash += theByte.ToString("x2");
            }
            return hash;
        }
        #endregion

    }
}
