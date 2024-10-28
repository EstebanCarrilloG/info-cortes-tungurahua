export default function clearString(string, removeLine = false){
    string = string?.toLowerCase();
    string = string?.replaceAll("-\n","");
    string = string?.replaceAll(",\n","-");
    string = string?.replaceAll("\n","-");
    string = string?.replaceAll("á","a");
    string = string?.replaceAll("é","e");
    string = string?.replaceAll("í","i");
    string = string?.replaceAll("ó","o");
    string = string?.replaceAll("ú","u");
    
    if (removeLine) string = string?.replace("-"," ");

    return string;

}