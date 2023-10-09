<template>
    <div id = 'hostels'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Hostels
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">Hostel Name</th>
                                <th class="text-left">Building</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="hostel in hostels" :key="hostel.id">
                                <td>{{ hostel.hostelname }}</td>
                                <td>{{ hostel.building }}</td>
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
                hostels: [
                   {
                    hostelname: 'Savannah',
                    building: 'Savannah Building',
                   },
                   {
                    hostelname: 'Mountain Rock',
                    building: 'MR Building',
                   },
                   {
                    hostelname: 'Primrose',
                    building: 'Blue House',
                   }
                ]
            }
        }
    }
</script>