import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Contacts, ContactFolders } from "./contacts";
import { OneNote, OneNoteMethods } from "./onenote";

/**
 * Describes a collection of Users objects
 *
 */
export class Users extends GraphQueryableCollection {

    constructor(baseUrl: string | GraphQueryable, path = "users") {
        super(baseUrl, path);
    }

    /**
     * Gets a user from the collection using the specified id
     * 
     * @param id Id of the user to get from this collection
     */
    public getById(id: string): User {
        return new User(this, id);
    }
}

/**
 * Represents a user entity
 */
export class User extends GraphQueryableInstance {
    /**
    * The onenote associated with me
    */
    public get onenote(): OneNoteMethods {
        return new OneNote(this);
    }

    /**
    * The Contacts associated with the user
    */
    public get contacts(): Contacts {
       return new Contacts(this);
    }

    /**
    * The Contact Folders associated with the user
    */
    public get contactFolders(): ContactFolders {
        return new ContactFolders(this);
    }
}
