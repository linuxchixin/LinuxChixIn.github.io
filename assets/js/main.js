var faqs = [
  {
    "question": "What is the aim of LinuxChix India?",
    "answer": "Every person has to switch to Linux at some point. Why not make today that switching point? Our aim is to get more people acquainted with Linux and its projects so that life becomes easier for them. ;) We are going to focus on projects related to Linux e.g. kernel, android, etc to keep our plans and goals well set. We aim to have more women and other minorities learn/teach Linux as a part of our family."
  },
  {
    "question": "Why LinuxChix when there are already other leading women tech groups?",
    "answer": "Because LinuxChix primarily aims to impart knowledge about Linux and related projects. We don't have a big domain of projects and thus its easier to manage and conduct events. And, we promise to be polite and helpful. Always. :)"
  },
  {
    "question": "Is LinuxChix only for women?",
    "answer": "No. We cordially invite contributions and participants from every community and sect regardless of gender, color or any other factor."
  },
  {
    "question": "I am a male and want to learn Linux, should I be joining LinuxChix?",
    "answer": "Absolutely. We already have an ever increasing group of awesome men who support us and help us set up things and organize workshops. You're very much welcome to take a workshop or talk too."
  },
  {
    "question": "Who should I contact to be a part of LinuxChix?",
    "answer": "No one. If you're polite and helpful or you want to be helped, you're free to ask any questions in the mailing list, google group, IRC or social accounts."
  },
  {
    "question": "I want to start a regional/campus chapter, where should I put up the request?",
    "answer": "Firstly, thank you so much! You can always inform/query on the mailing list/ google group/ IRC or social accounts. Also, please inform us about the new things you do so that we can mention about you and your achievements on our official website/blog."
  },
];

$(document).ready(function() {
  var faqs_html = '';
  $.each(faqs, function(index, item) {
    faqs_html +=
      '<div class="col-md-6 col-sm-12">\
          <h3 class="faq-question">' + item.question + '</h3>\
            <p class="faq-answer">' + item.answer + '</p>\
      </div>';
  });
  $('.faq-items-content').html(faqs_html);
});
