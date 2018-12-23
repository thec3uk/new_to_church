#!/usr/bin/env python3

import os

import requests

valid_paths = [
    '/Groups/293969/Alpha.aspx',
    '/Groups/293966/Ascend_Men.aspx',
    '/Groups/296268/Baptism.aspx',
    '/Groups/294104/Breathe_Conference.aspx',
    '/Groups/294103/Breathe_Women.aspx',
    '/Groups/299653/Building_Healthy_Families.aspx',
    '/Groups/299654/Building_Healthy_Families.aspx',
    '/Articles/529859/Bury_St_Edmunds.aspx',
    '/Articles/529859/C3_Bury_St.aspx',
    '/Groups/293936/C3_Business_Breakfast.aspx',
    '/Articles/509881/C3_Cambridge.aspx',
    '/Groups/298437/C3_Foodbank.aspx',
    '/Articles/508659/C3_Group_Leader.aspx',
    '/Groups/296266/C3_Groups.aspx',
    '/Group/Group.aspx?ID=296266',
    '/Groups/296021/C3_Groups_Directory.aspx',
    '/Groups/304747/C3_Policy_Documents.aspx',
    '/Groups/293958/C3_Teams.aspx',
    '/Groups/296270/C3_Youth.aspx',
    '/Groups/298444/CAP_Debt.aspx',
    '/Articles/532193/Christmas_at_Bury.aspx',
    '/Groups/302163/Christmas_at_Community.aspx',
    '/Articles/532194/Christmas_Concerts_in.aspx',
    '/Groups/298540/Coldhams_Coffee.aspx',
    '/Articles/510266/Got_Questions.aspx',
    '/Groups/296273/Compassion_UK.aspx',
    '/Groups/301363/Contribute_to_Community.aspx',
    '/Groups/295419/Deeper_Track.aspx',
    '/Groups/292794/Discovery_Track.aspx',
    '/Groups/296879/Divorce_Recovery.aspx',
    '/Groups/298267/Eco_Church.aspx',
    '/Groups/298443/Fresh_Start.aspx',
    '/Groups/294097/Hope_for_Justice.aspx',
    '/Groups/298441/Job_Club.aspx',
    '/Articles/511592/Kids_Conference.aspx',
    '/Groups/298271/Leaders.aspx',
    '/Groups/295423/Leadership_Track.aspx',
    '/Groups/294362/Lighthouse_Church.aspx',
    '/Groups/298442/Money_Course.aspx',
    '/Articles/510266/New_to_Church.aspx',
    '/Groups/308211/NewsLetterSignUp.aspx',
    '/Groups/308211/Newsletter_Signups.aspx',
    '/Groups/298438/Open_Lunch_Cafe.aspx',
    '/Groups/298446/Operation_Christmas_Child.aspx',
    '/Articles/509880/Parking_and_Transport.aspx',
    '/Articles/511704/Coming_Home_for.aspx',
    '/Articles/513682/New_Years_resolutions.aspx',
    '/Articles/514665/James.aspx',
    '/Articles/517272/We_Do_Sundays.aspx',
    '/Articles/519782/I_Believe.aspx',
    '/Articles/528029/Summer_at_the.aspx',
    '/Articles/530047/Influence.aspx',
    '/Articles/535644/Oh_What_Wonder.aspx',
    '/Groups/296300/Red_Letter_People.aspx',
    '/Groups/296301/Summer_at_the.aspx',
    '/Groups/298210/Guest_Speakers.aspx',
    '/Groups/298546/Welcome_Home.aspx',
    '/Articles/519789/C3_Privacy_Policy.aspx',
    '/Groups/298440/Read_Easy.aspx',
    '/Groups/298497/Resourcing_Pastoral_Carers.aspx',
    '/Groups/294102/Shine.aspx',
    '/Groups/293935/Stewardship_Path.aspx',
    '/Groups/298235/Students.aspx',
    '/Groups/296153/Teaching_Series.aspx',
    '/Groups/211350/The_C3_Academy.aspx',
    '/Groups/298430/Tithes_and_Offerings.aspx',
    '/Groups/299091/Toddler_Drop_In.aspx',
    '/Articles/510341/Vacancies.aspx',
    '/Groups/298644/Values.aspx',
    '/Groups/298643/Vision.aspx',
    '/Groups/298431/Vision_Offering.aspx',
    '/Groups/293963/Watoto.aspx',
    '/Groups/298439/Wednesday_Lunch_Club.aspx',
    '/Groups/296269/Westminster_Theological_Centre.aspx',
    '/Articles/509881/When_and_Where.aspx',
    '/Groups/298445/World_Vision.aspx',
    '/Articles/510346/WTC_Cambridge.aspx',
    '/Groups/296271/Young_Adults.aspx',
    '//index.html',
    '/Groups/293967/Breathe_Ministry.aspx',
    '/Groups/306585/C3_Abolition_Group.aspx',
    '/Groups/296267/C3_Courses.aspx',
    '/Groups/312903/C3_Events.aspx',
    '/Groups/92351/C3_Kids.aspx',
    '/Groups/298495/C3_Marriage_Courses.aspx',
    '/Groups/312904/C3_Ministries.aspx',
    '/Groups/298496/C3_Parenting_Courses.aspx',
    '/Groups/294359/CAP_Services.aspx',
    '/Groups/313196/Christmas_at_C3.aspx',
    '/Groups/294361/Community_Hub.aspx',
    '/Group/Group.aspx?ID=294361',
    '/Groups/296427/Giving.aspx',
    '/Groups/293962/Global_Mission.aspx',
    '/Groups/292793/Growth_Path.aspx',
    '/Group/Group.aspx?ID=292793',
    '/Groups/304287/Leading_Through_Your.aspx',
    '/Groups/294358/LOOK_Cambridge.aspx',
    '/Groups/300376/The_Marriage_Course.aspx',
    '/Groups/300377/The_Marriage_Preparation.aspx',
    '/Groups/292792/Next_Steps.aspx',
    '/Group/Group.aspx?ID=292792',
    '/Groups/293961/Outreach.aspx',
    '/Groups/304286/Personal_Development_Courses.aspx',
    '/Groups/296428/Resources.aspx',
    '/Groups/298552/Vision_and_Values.aspx',
    '/User/Copyright.aspx',
    '/User/PrivacyPolicy.aspx',
    '/User/TermsAndConditions.aspx',
    '/User/Help.aspx',
]


def files_in_dir(base_dir):
    for dir, _, files in os.walk(base_dir):
        for file in files:
            yield f"{dir}/{file}"


def main():
    base_dir = './dump/thec3.uk/'

    dump_paths = [file.replace('./dump/thec3.uk', '') for file in files_in_dir(base_dir)]
    missing, found = 0, 0

    for valid in valid_paths:
        if valid not in dump_paths:
            # print(f'URL not found directly: {valid}')
            possibles = [i for i in dump_paths if valid.endswith(i.rsplit('/', 1)[-1])]
            possible_resps = []
            for path in possibles:
                resp = requests.get(f'https://thec3.uk{path}', allow_redirects=False)
                if resp.status_code == 302:
                    possible_resps.append(resp.headers['Location'])

            if valid not in possible_resps:
                print(f'URL not found directly: {valid}')
                print(possibles)
                missing += 1
            else:
                found += 1
        else:
            found += 1

    print(f'Found: {found}/{len(valid_paths)} = {found/len(valid_paths)}')
    print(f'Missing: {missing}/{len(valid_paths)} = {missing/len(valid_paths)}')



if __name__ == '__main__':
    main()
