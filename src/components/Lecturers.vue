<template>
    <div id = 'lecturers'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Lecturers
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">First Name</th>
                                <th class="text-left">Last Name</th>
                                <th class="text-left">Email Address</th>
                                <th class="text-left">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lecturer in lecturers" :key="lecturer.id">
                                <td>{{ lecturer.firstname }}</td>
                                <td>{{ lecturer.lastname }}</td>
                                <td>{{ lecturer.emailaddress }}</td>
                                <td>{{ lecturer.phonenumber }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                
                </v-container>
                <v-divider></v-divider>

                
            </v-card>
        </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                lecturers: [
                   {
                    firstname: 'John',
                    lastname: 'Smith',
                    emailaddress: 'jsmith@gmail.com',
                    phonenumber: 25467432146,
                   },
                   {
                    firstname: 'Billy',
                    lastname: 'James',
                    emailaddress: 'bj@gmail.com',
                    phonenumber: 25489643665,
                   },
                   {
                    firstname: 'Anna',
                    lastname: 'Williams',
                    emailaddress: 'aw@gmail.com',
                    phonenumber: 25445789009,
                   }
                ]
            }
        }
    }
</script>