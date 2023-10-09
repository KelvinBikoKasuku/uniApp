<template>
    <div id = 'students'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Students
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">Firstname</th>
                                <th class="text-left">Lastname</th>
                                <th class="text-left">Gender</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.id">
                                <td>{{ student.firstname }}</td>
                                <td>{{ student.lastname }}</td>
                                <td>{{ student.gender }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.phone }}</td>
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
                students: [
                   {
                    firstname: 'Will',
                    lastname: 'Smith',
                    gender: 1,
                    email: 'willsmith@gmail.com',
                    phone: '25473423782',
                   },
                   {
                    firstname: 'Johnny',
                    lastname: 'Depp',
                    gender: 1,
                    email: 'johnnydepp@gmail.com',
                    phone: '25434567435',
                   },
                   {
                    firstname: 'Viola',
                    lastname: 'Davis',
                    gender: 2,
                    email: 'violadavis@gmail.com',
                    phone: '25456789098',
                   },
                   {
                    firstname: 'Gal',
                    lastname: 'Gadot',
                    gender: 2,
                    email: 'galgadot@gmail.com',
                    phone: '25478657489',
                   },
                   {
                    firstname: 'Anne',
                    lastname: 'Hathaway',
                    gender: 2,
                    email: 'annhathaway@gmail.com',
                    phone: '25445675479',
                   },{
                    firstname: 'Ryan',
                    lastname: 'Reynolds',
                    gender: 1,
                    email: 'ryanreynolds@gmail.com',
                    phone: '25412765462',
                   } 
                ]
            }
        }
    }
</script>